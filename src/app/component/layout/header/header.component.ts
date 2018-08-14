import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, RouterLink } from '@angular/router';
import { PostService } from '../../../services/post.service'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	dataForm : FormGroup
	items: any;
	active_filter : boolean = false;
	login: boolean = false;
	dataLogin: any;
	avatar:any;
	constructor(private fb: FormBuilder, private route: Router, private post : PostService, private http: HttpClient) {
		this.login = false;
		this.checkLogin();
	}

	ngOnInit() {
		this.dataForm = new FormGroup({
		    keyword: new FormControl('')
		  });
	}
	onSubmit() {
		let navigationExtras: NavigationExtras = {
	      queryParams: { 'keyword': this.dataForm.value.keyword }
	    };
		this.route.navigate(['/search'], navigationExtras);
		this.dataForm.setValue({keyword: ''});
		return false;
	}
	onChangeInput(){

	}
	getPost(){
		this.post.getAllPosts(10).subscribe(
			res => {
				this.items = res
			}
		)
	}
	onClickSearch(keyword){
		let navigationExtras: NavigationExtras = {
	      queryParams: { 'keyword': keyword }
	    };
		this.route.navigate(['/search'], navigationExtras);
		return false;
	}
	onKey(event: any){
		let keyword = event.target.value;
		this.post.getSearch(keyword, 10).subscribe(
			res => {
				this.items = res
			}
		)
		return false;
	}
	onBlur(){
		let keyword = '';
		this.post.getSearch(keyword, 10).subscribe(
			res => {
				this.items = res
			}
		)
		return false;
	}
	onFocus(event: any){
		let keyword = event.target.value;
		this.post.getSearch(keyword, 10).subscribe(
			res => {
				this.items = res
			}
		)
		return false;
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
				console.log(error);
			}
		)
		return false;
	}
	logout(){
		this.login = false;
		localStorage.removeItem('token');
		this.route.navigate(['/login']);
	}
}
