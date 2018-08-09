import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<any>{
  	var requestUrl = 'http://localhost:8000/category/all';
  	return this.http.get<Category>(requestUrl);
  }
  getCateOne(cate_id:number): Observable<any>{
  	var requestUrl = 'http://localhost:8000/category/getone/'+cate_id;
  	return this.http.get<Category>(requestUrl);
  }
}
