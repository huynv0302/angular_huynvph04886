import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import {Observable} from 'rxjs';
import { map, tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin' : '*'
      })
  };

  getAllPosts(limit: number, page:number = 1){
  	var requestUrl = 'http://127.0.0.1:8000/post/all?limit='+limit+'&type=0&page='+page;
    return this.http.get(requestUrl);
  }
  getTopPosts(limit: number){
  	var requestUrl = 'http://127.0.0.1:8000/post/all?limit='+limit+'&type=1';
  	return this.http.get(requestUrl);
  }

  getPostCategory(cate_id: number, limit: number = 8, page: number = 1) : Observable<any>{
  	var requestUrl = 'http://127.0.0.1:8000/post_category/'+cate_id+'?limit='+limit+'&page='+page;
  	return this.http.get<Post>(requestUrl);
  }
  getDetail(post_id: number): Observable<any>{
    var requestUrl = 'http://127.0.0.1:8000/post/find/'+post_id;
    return this.http.get<Post>(requestUrl);
  }

  getPostSameCate(post_id: number, limit: number = 3, page: number = 1): Observable<any>{
    var requestUrl = 'http://127.0.0.1:8000/post/same_cate/'+post_id+'?limit='+limit+'&page='+page;
    return this.http.get<Post>(requestUrl);
  }

  getSearch(keyword: string, limit: number = 16, page: number = 1): Observable<any>{
    var requestUrl = 'http://127.0.0.1:8000/search/'+keyword+'?limit='+limit+'&page='+page;
    return this.http.get<Post>(requestUrl);
  }
}
