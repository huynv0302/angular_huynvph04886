import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
	postId: number
	titleSite: string = 'Thêm mới'
	catelist: any
	showListCate: boolean = false
	selectCate: string
	selectIdCate: number
  login: boolean = false;
  dataLogin: any;
  avatar:any;
  
	dataForm : FormGroup
	allowedFileExt: any = '(.jpe?g|.png|.gif)';
	image: any;
  dataDetail: any;
  imageold: any = '../../../../assets/images/default.png';

  constructor(private post: PostService, private cate: CategoryService, private route: ActivatedRoute, private http: HttpClient, private routerLink: Router) { }

  ngOnInit() {
    this.login = false;
    this.checkLogin();
    window.scrollTo(0,0);
  	this.createFormValidate();
  	this.route.params.subscribe(
			params => {
				this.postId = parseInt(this.route.snapshot.paramMap.get('id'));
				if(this.postId){
					this.titleSite = 'Sửa danh mục';
          this.getDetailPost();
				}
				this.getListCate();
			}
		)

  }
  getListCate(){
  	this.cate.getAll().subscribe(
  		data => {
  			this.catelist = data;
  			console.log(data);
  		}
  	)
  }
  showCate(){
  	this.showListCate = !this.showListCate;
  }
  onChangleCate(nameCate, idCate){
  	this.selectCate = nameCate;
  	this.selectIdCate = idCate;
  	this.showListCate = false
  }
  createFormValidate(){
  	this.dataForm = new FormGroup({
  		title: new FormControl('', [
  			Validators.required,
  			Validators.minLength(4),
  		]),
  		feature_image: new FormControl(''),
  		short_desc: new FormControl('', Validators.required),
  		content: new FormControl('', Validators.required)
  	});
  }

  onSubmit(){
  	let formData: FormData = new FormData();
    if(this.postId){
      formData.append('id',this.postId.toString());
    }
		formData.append('title',this.dataForm.value.title);
		formData.append('cate_id',this.selectIdCate.toString());
    formData.append('feature_images',this.image);
		formData.append('imageold',this.imageold);
		formData.append('short_desc',this.dataForm.value.short_desc);
		formData.append('content',this.dataForm.value.content);
    console.log(formData);
    let url = 'http://localhost:8000/api/post/save';
    this.http.post<any>(url, formData).subscribe(
      req => {
        if(req.success){
          alert('thao tac thành công');
          this.routerLink.navigate(['/admin/post']);
        }
        else{
          alert('Thao tac that bai!');
        }
      }, error => {
          alert('Bài viết đã tồn tại');
      }
    )
	console.log(this.dataForm)
  }
  changeImage(e){
      var preview = document.getElementById('preview_img');
  		this.image = e.target.files[0];
      this.imageold = '';
  		console.log(e.target.files[0]);
      var reader = new FileReader();
      reader.addEventListener("load", function () {
         preview.src = reader.result;
      }, false);
      reader.readAsDataURL(e.target.files[0]);
  }
  getDetailPost(){
    this.post.getDetail(this.postId).subscribe(
      data => {
        if(!data.id){
           alert('Lỗi rồi!');
            this.routerLink.navigate(['admin/post']) 
        }
        console.log(data);
        this.dataDetail = data;
        this.dataForm.controls['title'].setValue(data.title);
        this.dataForm.controls['content'].setValue(data.content);
        this.dataForm.controls['short_desc'].setValue(data.short_desc);
        this.imageold = data.feature_images;
        this.selectIdCate = data.cate_id;
        this.selectCate = data.cate_name;
        this.postId = data.id
      }
    )
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
