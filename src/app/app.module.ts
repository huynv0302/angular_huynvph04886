import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {FileInputAccessorModule} from "file-input-accessor";
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AboutComponent } from './lab/about/about.component';
import { FormComponent } from './lab/form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeHomeComponent } from './theme/theme-home/theme-home.component';
import { ThemeDetailComponent } from './theme/theme-detail/theme-detail.component';
import { ThemeCategoriesComponent } from './theme/theme-categories/theme-categories.component';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { CategoryProductComponent } from './component/category-product/category-product.component';
import { MenuCateBarComponent } from './component/layout/menu-cate-bar/menu-cate-bar.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { HotNewsComponent } from './component/layout/hot-news/hot-news.component';
import { CategoryTypeOneComponent } from './component/layout/category-type-one/category-type-one.component';
import { CategoryTypeTwoComponent } from './component/layout/category-type-two/category-type-two.component';
import { CategoryTypeThreeComponent } from './component/layout/category-type-three/category-type-three.component';
import { CategoryTypeFourComponent } from './component/layout/category-type-four/category-type-four.component';
import { CategoryTypeSixComponent } from './component/layout/category-type-six/category-type-six.component';
import { CategoryTypeFiveComponent } from './component/layout/category-type-five/category-type-five.component';
import { ConnectedComponent } from './component/layout/right-bar/connected/connected.component';
import { CategoryRightTypeOneComponent } from './component/layout/right-bar/category-right-type-one/category-right-type-one.component';
import { ContentDetailComponent } from './component/layout/content-detail/content-detail.component';
import { CategoryComponent } from './component/category/category.component';
import { ContentCategoryComponent } from './component/layout/content-category/content-category.component';
import { ContentSearchComponent } from './component/layout/content-search/content-search.component';
import { SearchComponent } from './component/search/search.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ContentLoginComponent } from './component/layout/content-login/content-login.component';
import { ContentRegisterComponent } from './component/layout/content-register/content-register.component';
import { ModalComponent } from './component/layout/modal/modal.component';
import { PostComponent } from './component/admin/post/post.component';
import { HeaderAdminComponent } from './component/admin/layout/header-admin/header-admin.component';
import { AsideAdminComponent } from './component/admin/layout/aside-admin/aside-admin.component';
import { FooterAdminComponent } from './component/admin/layout/footer-admin/footer-admin.component';
import { PostAddComponent } from './component/admin/post-add/post-add.component';
import { PostFormComponent } from './component/admin/post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AboutComponent,
    FormComponent,
    ThemeHomeComponent,
    ThemeDetailComponent,
    ThemeCategoriesComponent,
    HomeComponent,
    DetailComponent,
    CategoryProductComponent,
    MenuCateBarComponent,
    HeaderComponent,
    FooterComponent,
    HotNewsComponent,
    CategoryTypeOneComponent,
    CategoryTypeTwoComponent,
    CategoryTypeThreeComponent,
    CategoryTypeFourComponent,
    CategoryTypeSixComponent,
    CategoryTypeFiveComponent,
    ConnectedComponent,
    CategoryRightTypeOneComponent,
    ContentDetailComponent,
    CategoryComponent,
    ContentCategoryComponent,
    ContentSearchComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ContentLoginComponent,
    ContentRegisterComponent,
    ModalComponent,
    PostComponent,
    HeaderAdminComponent,
    AsideAdminComponent,
    FooterAdminComponent,
    PostAddComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FileInputAccessorModule,
    NgSelectModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
