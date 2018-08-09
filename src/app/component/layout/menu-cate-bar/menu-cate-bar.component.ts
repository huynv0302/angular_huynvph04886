import { Component, OnInit, Input} from '@angular/core';
import { CategoryService } from '../../../services/category.service';
@Component({
	selector: 'app-menu-cate-bar',
	templateUrl: './menu-cate-bar.component.html',
	styleUrls: ['./menu-cate-bar.component.css']
})
export class MenuCateBarComponent implements OnInit {
	@Input() active_menu : any;
	cateData :any;
	constructor(private category : CategoryService) { }

	ngOnInit() {
		this.getData();
	}

	getData(){
		this.category.getAll().subscribe(
			data => {
				this.cateData = data;
				console.log(data);
			}
		)
	}
}
