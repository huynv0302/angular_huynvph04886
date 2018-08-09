import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-category-type-three',
	templateUrl: './category-type-three.component.html',
	styleUrls: ['./category-type-three.component.css']
})
export class CategoryTypeThreeComponent implements OnInit {
	cate_name : string = "Ẩm thực";
	cate_id : number = 11;
	cateData: any = false;
	postData: any = false;
	page: number = 1;
	lastPage: number;
	loading: boolean = false;
	next: boolean = false;
	prev: boolean = false;

	constructor(private route : ActivatedRoute, private post: PostService, private cate: CategoryService) { }

	ngOnInit() {
		this.getDataCate();
		this.getDataPost();
	}

	getDataCate(){
		this.cate.getCateOne(this.cate_id).subscribe(
			data => {
				this.cateData =data;
			}
			)
	}
	getDataPost(){
		this.next = false;
		this.prev = false;
		this.post.getPostCategory(this.cate_id, 3, this.page).subscribe(
			data => {
				this.postData =  data.data;
				this.lastPage = data.last_page;
				this.loading = true;
			}
			)
	}
	nextPage(){
		this.page++;
		this.loading = false;
		setTimeout(() => {this.getDataPost();this.next = true;},800)
	}
	prevPage(){
		this.page--;
		this.loading = false;
		setTimeout(() => {this.getDataPost();this.prev = true;},800)
	}

}
