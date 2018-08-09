import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-category-type-four',
	templateUrl: './category-type-four.component.html',
	styleUrls: ['./category-type-four.component.css']
})
export class CategoryTypeFourComponent implements OnInit {
	cate_name : string = "Thời trang";
	cate_id : number = 9;
	cateData: any = false;
	postData: any = false;

	cate_name_two : string = "Sức khỏe";
	cate_id_two : number = 12;
	cateData_two: any = false;
	postData_two: any = false;

	constructor(private route : ActivatedRoute, private post: PostService, private cate: CategoryService) { }

	ngOnInit() {
		this.getDataCate();
		this.getDataPost();
		this.getDataCateTwo();
		this.getDataPostTwo();
	}

	getDataCate(){
		this.cate.getCateOne(this.cate_id).subscribe(
			data => {
				this.cateData =data;
			}
			)
	}
	getDataPost(){
		this.post.getPostCategory(this.cate_id, 4).subscribe(
			data => {
				this.postData =  data.data;
			}
			)
	}

	getDataCateTwo(){
		this.cate.getCateOne(this.cate_id_two).subscribe(
			data => {
				this.cateData_two =data;
			}
			)
	}
	getDataPostTwo(){
		this.post.getPostCategory(this.cate_id_two, 4).subscribe(
			data => {
				this.postData_two =  data.data;
			}
			)
	}

}
