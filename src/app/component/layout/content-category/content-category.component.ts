import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { PostService } from '../../../services/post.service';

@Component({
	selector: 'app-content-category',
	templateUrl: './content-category.component.html',
	styleUrls: ['./content-category.component.css']
})
export class ContentCategoryComponent implements OnInit {
	data;
	cateData: any = false;
	cateChild: any =false;
	cate_id: number;
	page: number = 1;
	lastPage: number;

	constructor(private route : ActivatedRoute, private category : CategoryService, private post : PostService) { 

	}

	ngOnInit() {
		this.route.params.subscribe(
			params => {
				this.cate_id = parseInt(this.route.snapshot.paramMap.get('cate_id'));
				this.getCate();
				this.getPost();
				window.scrollTo(0,0);
			}
		);
	}

	getCate(){
		this.category.getCateOne(this.cate_id).subscribe(
			data => {
				this.cateData = data;
				this.cateChild = this.cateData.cate_child;
			}
		)
	}

	getPost(){
		this.post.getPostCategory(this.cate_id, 8, this.page).subscribe(
			data => {
				this.data = data.data;
				this.lastPage = data.last_page;
				console.log(data);
			}
		)
	}

	nextPage(){
		this.page++;
		window.scrollTo(0,0);
		this.getPost();
	}
	prevPage(){
		this.page--;
		window.scrollTo(0,0);
		this.getPost();
	}

}
