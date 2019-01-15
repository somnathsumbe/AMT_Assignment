import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from "../interface/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private dataservice: DataService) {
    this.dataservice.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }

  ngOnInit() {

  }

  deletepost(id) {
    this.dataservice.deletePosts(id).subscribe((post) => {
      this.posts = post;
    });

  }



  onSubmit(fields) {
    let formData = {
      "fields": {
        "title": {
          "stringValue": fields.title
        },
        "description": {
          "stringValue": fields.description
        }
      }
    }
    console.log(formData);
    this.dataservice.addPosts(formData).subscribe((post) => {
      this.posts = post;
    });



  }

}
// interface Post{
//   id:number,
//   title:string,
//   description:string
// }
