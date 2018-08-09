import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-category-type-five',
	templateUrl: './category-type-five.component.html',
	styleUrls: ['./category-type-five.component.css']
})
export class CategoryTypeFiveComponent implements OnInit {
	cate_name : string = "Pháp luật";
	cate_id : number = 10;
	cateData: any = false;
	postData: any = false;
	page: number = 1;
	lastPage: number;

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
		this.post.getPostCategory(this.cate_id, 4, this.page).subscribe(
			data => {
				this.postData =  data.data;
				this.lastPage = data.last_page;
			}
			)
	}

	nextPage(){
		this.page++;
		this.getDataPost();
	}
	prevPage(){
		this.page--;
		this.getDataPost();
	}

}
