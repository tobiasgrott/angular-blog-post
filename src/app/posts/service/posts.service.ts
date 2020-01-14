import { Injectable } from '@angular/core';
import { PostsModule } from '../posts.module';
import { RestOptions } from '../../rest/model/rest-options';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { RestDataService } from '../../rest/service/rest-data.service';

@Injectable()
export class PostsService {


  constructor(private dataService: RestDataService) { }

  getPosts(): Observable<Post[]> {
    const options = <RestOptions>{
      link: { href: '/posts', method: RestOptions.GET }
    };

    return this.dataService.request<Post[]>(options);
  }

  getPostById(postId: number): Observable<Post> {
    const options = <RestOptions>{
      link: { href: '/posts/{postId}', method: RestOptions.GET },
      properties: { postId }
    }

    return this.dataService.request<Post>(options);
  }
}
