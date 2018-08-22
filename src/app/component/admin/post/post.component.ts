import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  limit : number = 10
  dataList : any
  page : number = 1;
  showModal: boolean = false;
  delete_postid : number;
  lastPage: number;
  images_default: string;
  loading: boolean = false;
  cate_id: number;

  login: boolean = false;
  dataLogin: any;
  avatar:any;

  constructor(private post : PostService, private http: HttpClient, private routerLink: Router) {
    
  }

  ngOnInit() {
    this.login = false;
    this.checkLogin();
  	this.getListPost();
    window.scrollTo(0,0);
  }

  getListPost(){
  	this.post.getAllPosts(this.limit, this.page, this.cate_id).subscribe(
  		req => {
  			this.dataList = req;
        this.lastPage = req.last_page;
        this.loading = true;
  			console.log(req);
  		}
  	)
  }
  deletePost(post_id){
    this.showModal = false;
    this.post.deletePost(post_id).subscribe(
      req => {
        if(req.success){
          alert('thao tac thanh cong');
          this.getListPost();
          window.scrollTo(0,0);
        }
      }
    )
  }
  onShowModal(post_id){
    this.delete_postid = post_id;
    this.showModal = true;
  }
  hiddenModal(){
    this.showModal = false;
  }
  nextPage(){
    this.page++;
    this.loading = false;
    setTimeout(() => {this.getListPost()},800)
    window.scrollTo(0,0);
    
  }
  prevPage(){
    this.page--;
    this.loading = false;
    setTimeout(() => {this.getListPost()},800)
    window.scrollTo(0,0);
  }
  getListPostOfCate(cate_id){
    this.cate_id = cate_id;
    window.scrollTo(0,0);
    this.getListPost();
  }
  checkLogin(){
    let url = 'http://localhost:8000/api/user';
    // let author = 'Bearer '+token;
    let author = 'Bearer '+localStorage.getItem("token");
    let httpOptions = {
      headers: new HttpHeaders({ 
        Authorization : author
        })
     };
    let headers: any = {
      Authorization: author
    }
    this.http.get<any>(url, httpOptions).subscribe(
      req => {
        this.dataLogin = req;
        this.avatar = 'http://localhost:8000/storage/user/'+req.avatar;
        this.login = true;
      }, error => {
        alert('Lỗi đăng nhập!');
        this.routerLink.navigate(['/']);
      }
    )
    return false;
  }
}
