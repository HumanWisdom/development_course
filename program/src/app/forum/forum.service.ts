import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
  HttpParams
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  //path="http://18.132.47.231/api";
  path="https://www.humanwisdom.info/api"
  //path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
  //path="https://staging.humanwisdom.info/api"
  
postdata: any;

public postdataSource = new BehaviorSubject<any>([]);
  postdatavalue = this.postdataSource.asObservable();

  constructor( private http: HttpClient,handler: HttpBackend) { }
  getposts(index:Number,searchText):Observable<any>{
    let url='';
    let uID=154;
    console.log(index);
    console.log(searchText);
    switch (index) {
      case 0:
        if(searchText){
          url = this.path+`/GetAllPosts/${searchText}`;
        }
        else{
        url = this.path+`/GetAllPosts`;
        }
        break;
        case 1:
        if(searchText){
          url = this.path+`/GetFollowedPosts/${uID}/${searchText}`;
        }
        else{
        url = this.path+`/GetFollowedPosts/${uID}`;
        }
        break;
        case 2:
        if(searchText){
          url = this.path+`/GetPosts/${uID}/${searchText}`;
        }
        else{
        url = this.path+`/GetPosts/${uID}`;
        }
        break;
        case 3:
        if(searchText){
          url = this.path+`/GetReflectionPosts/${searchText}`;
        }
        else{
        url = this.path+`/GetReflectionPosts`;
        }
        break;
    
      default:
        url = this.path+`/GetAllPosts`;
        break;
    }
    return this.http.get(url);
  }
  submitPost(data:any):Observable<any>{
    return this.http.post(this.path+'/AddPost',data)
  }
  reportPost(data:any):Observable<any>{
    return this.http.post(this.path+'/ReportPost',data)
  }
  followPost(data:any):Observable<any>{
    return this.http.post(this.path+'/FollowPost',data)
  }
  likePost(data:any):Observable<any>{
    return this.http.post(this.path+'/LikePost',data)
  }

  getPostDetail(data:string):Observable<any>{
    return this.http.get(this.path+`/GetPostsDetails/${data}`)
  }
  getUserDetail(data:string):Observable<any>{
    return this.http.get(this.path+`/Users/${data}`)
  }

  
}
