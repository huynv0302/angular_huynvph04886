import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup;
  grant_type: string = 'password';
  client_id: string = '4';
  client_secret: string = 'SPo3nvTdFiWYC0noe2QPgyTRptneGVBUzhnfzNKj';
  username: string;
  password: string;
  error: any;
  httpOptions = {
      headers: new HttpHeaders({ 
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin' : '*'
          })
  };
  constructor(private fb: FormBuilder, private http: HttpClient, private routerLink: Router) { }

  ngOnInit() {
  	window.scrollTo(0,0);
  	this.dataForm = this.fb.group({
  		email: ['', Validators.required],
  		password: ['', Validators.required]
  	})
    this.checkLogin();
  }
  onSubmit(){
    let formData: FormData = new FormData();
    formData.append('grant_type', this.grant_type);
    formData.append('client_id', this.client_id);
    formData.append('client_secret', this.client_secret);
    formData.append('username', this.dataForm.value.email);
    formData.append('password', this.dataForm.value.password);
    let url = 'http://localhost:8000/oauth/token';
    this.http.post<any>(url, formData).subscribe(
      req => {
        localStorage.setItem('token', req.access_token);
        window.location.href = '/';
      }, error => {
        console.log(error.error.message)
        alert(error.error.message)
      }
    )
  }
  checkLogin(){
    if(localStorage.getItem('token')){
      this.routerLink.navigate(['/']);
    }
  }
}
