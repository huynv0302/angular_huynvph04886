import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-category-type-two',
	templateUrl: './category-type-two.component.html',
	styleUrls: ['./category-type-two.component.css']
})
export class CategoryTypeTwoComponent implements OnInit {
	cate_name : string = "Thể thao";
	cate_id : number = 8;
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
