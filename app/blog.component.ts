import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { Blog } from './app.component';
import { element } from 'protractor';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css', './font-awesome-4.7.0/css/font-awesome.min.css'],
  providers: [LoadingService],
})
export class BlogComponent {
 blogs: Blog[];
 up: Blog;

 newtitle= '[ - Default Title - ]';
 newauthor= 'Default Author';
 newarea= 'Text Area';
 bt= 'Save';

 flag= false;
 targetblog: Blog;
constructor (private loadingService: LoadingService) {
    this.blogs = this.loadingService.getBlogs();
  }

  upload() {

    if (!this.flag) {
      this.up = {
        title: this.newtitle,
        author: 'Post by '  +  this.newauthor,
        detail: this.newarea,
        postDate: new Date()
      };
      this.blogs.push(this.up);
    } else {
      this.targetblog.title = this.newtitle;
      this.targetblog.author = 'Post by '  +  this.newauthor;
      this.targetblog.detail = this.newarea;
      this.targetblog.postDate = new Date();
      this.flag = false;
    }

  }
  attach(targetblog: Blog): void {
    this.targetblog = targetblog;
    this.newtitle = this.targetblog.title;
    this.newauthor = this.targetblog.author;
    this.newarea = this.targetblog.detail;
    this.flag = true;
  }
  }
