import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../services/post.service';
import { CategoryService } from '../../../../services/category.service';

@Component({
	selector: 'app-category-right-type-one',
	templateUrl: './category-right-type-one.component.html',
	styleUrls: ['./category-right-type-one.component.css']
})
export class CategoryRightTypeOneComponent implements OnInit {
	cate_name : string = "Du lịch";
	cate_id : number = 14;
	cateData: any = false;
	postData: any = false;
	page: number = 1;
	lastPage: number;
	loading: boolean = false;

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
		this.post.getPostCategory(this.cate_id, 6, this.page).subscribe(
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
		setTimeout(() => {this.getDataPost()},800)
	}
	prevPage(){
		this.page--;
		this.loading = false;
		setTimeout(() => {this.getDataPost()},800)
	}

}
