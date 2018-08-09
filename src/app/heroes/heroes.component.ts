import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	hero : Hero[] = [
		{
			id: 1,
			name: 'Nguyễn Văn Huy',
			birdthDate : '03/02/1998',
			sex: 'nam',
			address: 'Quảng Ninh',
			avatar: '../assets/images/img2.jpg'
		},
		{
			id: 1,
			name: 'Nguyễn Văn A',
			birdthDate : '03/02/1994',
			sex: 'nam',
			address: 'Quảng Ninh',
			avatar: '../assets/images/img1.jpg'
		}
	]
	valDetail : {}
	detail(val){
		this.valDetail = val;
	}
	constructor() { }

	ngOnInit(){

	}	

}
