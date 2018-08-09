import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-hot-news',
	templateUrl: './hot-news.component.html',
	styleUrls: ['./hot-news.component.css']
}) 
export class HotNewsComponent implements OnInit {
	postData: any = false;
	page;
	constructor(private post: PostService, private route: ActivatedRoute, cate: CategoryService) {
		this.page = 1;
	}

	ngOnInit() {
		this.getDataPost();
	}
	getDataPost(){
		this.post.getTopPosts(4).subscribe(
			data => {
				this.postData = data;
			}
		)
	}

}
