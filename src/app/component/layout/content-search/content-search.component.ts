import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { PostService } from '../../../services/post.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-content-search',
	templateUrl: './content-search.component.html',
	styleUrls: ['./content-search.component.css']
})
export class ContentSearchComponent implements OnInit {
	data: any = false;
	routeK: Observable<string>;
	page: number = 1;
	lastPage: number;
	totalData: number = 0;
	keyword: string;
	constructor(private route : ActivatedRoute, private category : CategoryService, private post : PostService) { }

	ngOnInit() {
		this.routeK = this.route.queryParamMap.pipe(map(params => params.get('keyword' || 'NONE')))
		this.routeK.subscribe(
			params => {
				this.keyword = params;
				this.getPost();
				window.scrollTo(0,0);
			}
		)
	}

	getPost(){
		this.post.getSearch(this.keyword,8,this.page).subscribe(
			data => {
				this.data = data.data;
				this.totalData = data.total;
				this.lastPage = data.last_page;
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
