import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './lab/about/about.component';
import { FormComponent } from './lab/form/form.component';
import { ThemeHomeComponent } from './theme/theme-home/theme-home.component';
import { ThemeDetailComponent } from './theme/theme-detail/theme-detail.component';
import { ThemeCategoriesComponent } from './theme/theme-categories/theme-categories.component';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { CategoryComponent } from './component/category/category.component';
import { SearchComponent } from './component/search/search.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PostComponent } from './component/admin/post/post.component';
import { PostFormComponent } from './component/admin/post-form/post-form.component';

const routes: Routes = [
  { path: 'lab/about', component: AboutComponent },
  { path: 'lab/form', component: FormComponent },
  { path: '', component: HomeComponent },
  { path: 'detail/:post_slug/:post_id', component: DetailComponent },
  { path: 'category/:cate_slug/:cate_id', component: CategoryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/post', component: PostComponent },
  { path: 'admin/post/add', component: PostFormComponent },
  { path: 'admin/post/edit/:id', component: PostFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
