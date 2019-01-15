import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  constructor(public http:Http) {
    console.log("data service connected");
   }
   getPosts(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    //return this.http.get('../../assets/Database/database.json').map(res => res.json());
   }

   deletePosts(id){
     return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
   // return this.http.delete(`../../assets/Database/database.json/${id}`).map(res => res.json());
   }

   addPosts(FormData){
     return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    //return this.http.post(`../../assets/Database/database.json`,FormData).map(res => res.json());
   }

}

