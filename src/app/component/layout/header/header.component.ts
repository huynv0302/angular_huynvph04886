import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PostService } from '../../../services/post.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	dataForm : FormGroup
	items: any;
	active_filter : boolean = false;
	constructor(private fb: FormBuilder, private route: Router, private post : PostService) { }

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
}
