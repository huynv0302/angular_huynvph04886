import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	dataForm : FormGroup;
	formSubmit: any = {
		email : '',
		name : '',
		password: '',
		avatar: ''
	}
	httpOptions = {
	    headers: new HttpHeaders({ 
		        'Content-Type': 'application/json', 
		        'Access-Control-Allow-Origin' : '*'
		      })
	};
	listUser: any
	errorForm: any
	allowedFileExt: any = '(.jpe?g|.png|.gif)';
	image: any;
	constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private routerLink: Router) { }

	ngOnInit() {
		this.dataForm = this.fb.group({
			avatar : ['', [Validators.required]],
			email : ['', [Validators.required, Validators.email]],
			name : ['', [Validators.required]],
			pw: this.fb.group({
				password: ['', [Validators.required, Validators.minLength(6)]],
				confirmPassword: ['', [Validators.required, this.passwordConfirming]]
			})
		})
		this.getListUser();
		this.checkLogin();
	}
	onSubmit() {
		let formData: FormData = new FormData();
		formData.append('email',this.dataForm.value.email);
		formData.append('name',this.dataForm.value.name);
		formData.append('password',this.dataForm.value.pw.password);
		formData.append('avatar',this.image);
		let url = 'http://localhost:8000/api/register_user';
		this.http.post<any>(url, formData).subscribe(
			req => {
				if(req.success){
					alert('Chúc mừng bạn đã đăng ký thành công')
					this.routerLink.navigate(['/login']);
				}
				else{
					alert(req.message);
				}
			}
		)
		console.log(this.dataForm.value);
	}
	passwordConfirming(c: AbstractControl): any {
		if(!c.parent || !c) return;
		const pwd = c.parent.get('password');
		const cpwd= c.parent.get('confirmPassword')

		if(!pwd || !cpwd) return ;
		if (pwd.value !== cpwd.value) {
			return { invalid: true };

		}
	}
	checkEmail(c: AbstractControl):any{
		if(!c.parent || !c) return;
		let result = false;
		const email = c.parent.get('email');
		
		if(result){
			return { invalid: true };
		}
	}
	getListUser(){
		return this.http.get<any>('http://localhost:8000/list-user');
	}
	checkLogin(){
	    if(localStorage.getItem('token')){
	      this.routerLink.navigate(['/']);
	    }
  	}
  	changeImage(e){
  		this.image = e.target.files[0];
  		console.log(e.target.files[0]);
  	}
}


