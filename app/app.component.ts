import { Component } from '@angular/core';
export class Blog {
  title: string;
  author: string;
  detail: string;
  postDate: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
