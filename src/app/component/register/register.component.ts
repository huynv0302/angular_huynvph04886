import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	dataForm : FormGroup;
	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.dataForm = this.fb.group({
			email : ['', [Validators.required, Validators.email]],
			name : ['', [Validators.required]],
			pw: this.fb.group({
				password: ['', [Validators.required, Validators.minLength(6)]],
				confirmPassword: ['', [Validators.required, this.passwordConfirming]]
			})
		})
	}
	onSubmit() {
		console.log(this.dataForm);
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
}


