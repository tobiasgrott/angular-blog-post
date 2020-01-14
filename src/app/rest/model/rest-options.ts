
export class RestOptions {

    public static readonly GET: string = 'GET';
    public static readonly POST: string = 'POST';
    public static readonly PUT: string = 'PUT';
    public static readonly DELETE: string = 'DELETE';

    //Url & the Http Method GET,POST,PUT,DELETE etc.
    public link: {
        href: string;
        method: string;
    };
    //Optional request body for POST,PUT methods
    public requestBody?: any;
    //Url params to be replaced
    public properties?: { [key: string]: any };
    //Set to true if loader should not be shown when REST call is executed
    public noLoader?: boolean = false;
}
