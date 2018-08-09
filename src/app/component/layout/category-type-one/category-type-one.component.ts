import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-category-type-one',
	templateUrl: './category-type-one.component.html',
	styleUrls: ['./category-type-one.component.css']
})
export class CategoryTypeOneComponent implements OnInit {
	cate_name : string = "Bóng Đá";
	cate_id : number = 7;
	cateData: any = false;
	postData: any = false;
	page: number = 1;
	lastPage: number;
	images_default: string;
	loading: boolean = false;

	constructor(private route : ActivatedRoute, private post: PostService, private cate: CategoryService) { }

	ngOnInit() {
		this.images_default = '../../../assets/default.png';
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
		this.post.getPostCategory(this.cate_id, 5, this.page).subscribe(
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
