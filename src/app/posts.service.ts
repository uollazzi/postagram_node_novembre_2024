import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // http = inject(HttpClient);

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>("http://localhost:3000/api/posts");
  }
}
