import {
  HttpBackend, HttpClient
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
    //path="http://18.132.47.231/api";
    path = environment.apiURL;
 
    constructor(private http: HttpClient, handler: HttpBackend) {
    }
  
  getBlog(): Observable<any> {
    return this.http.get(this.path + `/GetBlogs`)
  }

  getBlogId(BlogID): Observable<any> {
    return this.http.get(this.path + `/GetBlogs/${BlogID}`)
  }

  likeblog(BlogID): Observable<any> {
    return this.http.post(this.path + `/AddBlogLikes/${BlogID}`, {})
  }

  commentblog(data): Observable<any> {
    return this.http.post(this.path + '/AddBlogComments', data)
  }

}
