import { Injectable } from '@angular/core';
import { RestOptions } from '../model/rest-options';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestDataService {
  private _restCounter: number = 0;
  get restCounter() { return this._restCounter };

  constructor(private http: HttpClient) { }


  request<T>(options: RestOptions): Observable<T> {
    this.validateLink(options);
    options.link.href = environment.baseUrl + this.replaceProperties(options.link.href, options.properties);
    return this.fireRequest<T>(options);
  }

  private validateLink(options: RestOptions) {
    if (!options || !options.link) throw new Error("Link is NULL");
  }

  private replaceProperties(url: string, properties: { [key: string]: any }) {
    if (!url) return url;
    var url = url.split('?')[0];
    url = this.replace(url, properties);

    var queryParams = url.split('?')[1] || '';
    queryParams = this.replace(queryParams, properties).replace(/[^=&]+=(&|$)/g, "").replace(/&$/, "");

    if (!!queryParams) return `${url}?${queryParams}`;
    return url;
  }

  private replace(template: string, properties: { [key: string]: any }): string {
    return template.replace(/{[^{}]+}/g, function (key) {
      return properties[key.replace(/[{}]+/g, "")] == null ? "" : properties[key.replace(/[{}]+/g, "")];
    });
  }

  private fireRequest<T>(options: RestOptions): Observable<T> {

    if (!options.noLoader) {
      this._restCounter++;
    }

    return this.http.request<T>(
      options.link.method,
      options.link.href, {
      body: options.requestBody
    }).pipe(

      catchError(error => {
        return throwError(error);
      }),

      finalize(() => {
        if (!options.noLoader) {
          this._restCounter--;
        }
      }));
  }
}
