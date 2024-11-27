import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  postsService = inject(PostsService);

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe(posts => {
        this.posts = posts;


        
        
        
        console.log("zamira");
        
      });
  }
}
