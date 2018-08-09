import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	hero;
  constructor() {
  	this.hero = hero
   }

  ngOnInit() {
  }
	valDetail : {};
	detail(val){
		this.valDetail = val;
	}


}
