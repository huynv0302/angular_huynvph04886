import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	cate_id: number;
	constructor(
		private route: ActivatedRoute
		) {
		
	}

	ngOnInit() {
		this.route.params.subscribe(
			params => {
				this.cate_id = parseInt(this.route.snapshot.paramMap.get('cate_id'));
			}
		);
	}
}
