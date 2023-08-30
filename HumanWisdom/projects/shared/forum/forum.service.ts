import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
  HttpParams
} from "@angular/common/http";

import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  //path="http://18.132.47.231/api";
  path=environment.apiURL;
  //path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
 // path="https://staging.humanwisdom.info/api"
  
postdata: any;
public toastrService:ToastrService
public postdataSource = new BehaviorSubject<any>([]);
  postdatavalue = this.postdataSource.asObservable();

  constructor( private http: HttpClient,handler: HttpBackend,public toastr:ToastrService) {
    this.toastrService=this.toastr;
   }

  public GetTagList(){
    return  [{
      value: 1, label: 'Mental Health'
    }, {
      value: 2, label: 'Relationships'
    }, {
      value: 3, label: 'Work'
    }, {
      value: 4, label: 'Nuggets of Inspiration'
    },
    {
      value: 5, label: 'Ask a coach'
    }];
  }  

  getposts(index:Number,searchText,uID):Observable<any>{
    let url='';
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
  UpdatePost(data:any):Observable<any>{
    return this.http.post(this.path+'/AddPost',data)
  }
  deletePost(data:any):Observable<any>{
    return this.http.post(this.path+`/DeletePost/${data}`,null);
  }
  
}
