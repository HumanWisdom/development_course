import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from '../../blog.service';
import { BlogIndexPage } from './blog/blog-index/blog-index.page';
import { BlogArticlePage } from './blog/blog-article/blog-article.page';
import{SharedModule} from './../../../shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    BlogIndexPage, BlogArticlePage
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    IonicModule,
    SharedModule
  ],
  providers: [BlogService],
  exports:[BlogIndexPage, BlogArticlePage],
  bootstrap: [AppComponent]
})
export class AppModule { }
