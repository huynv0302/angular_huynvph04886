import { Component, OnInit } from '@angular/core';
import {hero} from '../hero';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  arr;
  constructor() { this.arr = hero }

  ngOnInit() {
  }
  
  address = "Nguyễn Huệ - Đông Triều - Quảng Ninh";
  theme = "App tin tức";
  contentTheme = "Làm một ứng dụng về tin tức bằng angular.";

}
