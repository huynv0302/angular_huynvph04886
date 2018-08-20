import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
	postId: number
	titleSite: string = 'Thêm mới'
	catelist: any
	showListCate: boolean = false
	selectCate: string
	selectIdCate: number

	dataForm : FormGroup
	allowedFileExt: any = '(.jpe?g|.png|.gif)';
	image: any;

  constructor(private post: PostService, private cate: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.createFormValidate();
  	this.route.params.subscribe(
			params => {
				this.postId = parseInt(this.route.snapshot.paramMap.get('id'));
				if(this.postId){
					this.titleSite = 'Sửa danh mục'
				}
				this.getListCate();
			}
		)

  }
  getListCate(){
  	this.cate.getAll().subscribe(
  		data => {
  			this.catelist = data;
  			console.log(data);
  		}
  	)
  }
  showCate(){
  	this.showListCate = !this.showListCate;
  }
  onChangleCate(nameCate, idCate){
  	this.selectCate = nameCate;
  	this.selectIdCate = idCate;
  	this.showListCate = false
  }
  createFormValidate(){
  	this.dataForm = new FormGroup({
  		title: new FormControl('', [
  			Validators.required,
  			Validators.minLength(4),
  		]),
  		feature_image: new FormControl('', Validators.required),
  		cate_id: new FormControl('', Validators.required),
  		short_desc: new FormControl('', Validators.required),
  		content: new FormControl('', Validators.required),
  	});
  }

  onSubmit(){
  	let formData: FormData = new FormData();
		formData.append('title',this.dataForm.value.title);
		formData.append('parent_id',this.dataForm.value.cate_id);
		formData.append('feature_image',this.image);
		formData.append('short_desc',this.dataForm.value.short_desc);
		formData.append('content',this.dataForm.value.content);
	console.log(this.dataForm)
  }
  changeImage(e){
  		this.image = e.target.files[0];
  		console.log(e.target.files[0]);
  	}
}
