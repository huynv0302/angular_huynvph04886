import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../../services/post.service';

@Component({
	selector: 'app-content-detail',
	templateUrl: './content-detail.component.html',
	styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
	postId : number;
	data : any = false;
	postDataSameCate: any = false;
	page: number = 1;
	lastPage: number;
	loading: boolean = false;

	constructor(private route : ActivatedRoute,private post : PostService) { }

	ngOnInit() {
		this.route.params.subscribe(
			params => {
				this.postId = parseInt(this.route.snapshot.paramMap.get('post_id'));
				this.getDetail();
				this.getPostCateSame();
				window.scrollTo(0,0);
			}
			)
	}

	getDetail(){
		this.post.getDetail(this.postId).subscribe(
			data => {
				this.data = data;
			}
		)
	}

	getPostCateSame(){
		this.post.getPostSameCate(this.postId, 3, this.page).subscribe(
			data => {
				this.postDataSameCate = data.data;
				this.lastPage = data.last_page;
				this.loading = true;
			}
		)
	}

	nextPage(){
		this.page++;
		this.loading = false;
		setTimeout(() => {this.getPostCateSame()},800)
	}
	prevPage(){
		this.page--;
		this.loading = false;
		setTimeout(() => {this.getPostCateSame()},800)
	}

}
