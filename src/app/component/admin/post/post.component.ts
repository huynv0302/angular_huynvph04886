import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
limit : number = 10
dataList : any
page : number = 1;
  constructor(private post : PostService) { }

  ngOnInit() {
  	this.getListPost();
  }

  getListPost(){
  	this.post.getAllPosts(this.limit, this.page).subscribe(
  		req => {
  			this.dataList = req;
  			console.log(req);
  		}
  	)
  }
}
