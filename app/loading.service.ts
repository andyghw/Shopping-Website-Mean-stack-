import { Injectable } from '@angular/core';
import { Blog } from './app.component';
import { Blogs } from './blogs';

@Injectable()
export class LoadingService {
  getBlogs(): Blog[] {
    return Blogs;
  }
}
