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
	constructor(private fb: FormBuilder, private route: Router, private post : PostService, private http: HttpClient) {
		this.login = false;
		this.checkLogin();
	}

	ngOnInit() {
		this.dataForm = new FormGroup({
		    keyword: new FormControl('')
		  });
		// localStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJkODhkMzM2ZDU2YmYzNGViOGQzNzcxYmQwY2Y2NTE3YTRlMDJhMjc3ODAzNTAwMGYwMjUxMmJmZjIxZmEyODQwM2ZhNGU1OWJiZTE3NGI3In0.eyJhdWQiOiI0IiwianRpIjoiYmQ4OGQzMzZkNTZiZjM0ZWI4ZDM3NzFiZDBjZjY1MTdhNGUwMmEyNzc4MDM1MDAwZjAyNTEyYmZmMjFmYTI4NDAzZmE0ZTU5YmJlMTc0YjciLCJpYXQiOjE1MzM5MjY0OTgsIm5iZiI6MTUzMzkyNjQ5OCwiZXhwIjoxNTY1NDYyNDk4LCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.nzp09KdAHCHjNJ225edcNn895DqAd7AyRpdqivlgdxYOb43xpb_NGJucrm5KC-pJAcf4bQ8o8yQN62evk_6pWbykoDaxx4C2J2KsNRVldxWAt0-j-W89liLv_T7beCPYr0yJhWzQ5ns9cjtkRt95MnCGcUIeamIgHvEe0EumXMXcGxFG3q7c_gnp6-_iW58bn-33aeasE_7MXezf1Jftfdh6ZtMsvdypHRduUlz9_fiLYnhU5KjdqOpufU3hFWkFWXcqr2u7y-Ia-jgUY3UqO0gJgUDomx4QTeaA7vvUQlkjAIWInGI4DCpd7q-up59MEgqZyDeJ3BIGGzdcxUNGnWOKlBVtX0zYxUDA2jA7QqKdnGwyoTjHxbCeZjFzZIidnr_lYLrTO58SCE-42eg0o1yJy-yYOyigS7qukPlgZP4WE2CiEA3fCPZg9CwH5RslxILPIXM9o6538rioV5Lgr9yHVcnDbRDWzhPwD71Kq-ak9ze6vekRAa-ZvdR4dtmgsbnleUHx46kfgbGFdFXtOs7_RsSrqSw2b3xCaJ7RKn13nfvzQhRaLIvsIubcY10-8knghy2m7yd2FJF1W4RXwKT20btajwsstQbS23i5ojo7i7M17lSnJ0X4YV5VdesWznqngfYNygXr3LlcT72D3tyCMCNj__ABiblwu01IHKs");
		// if(localStorage.getItem("token")){
		// 	this.checkLogin(localStorage.getItem("token"));
		// 	console.log(this.dataLogin);
		// }
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
