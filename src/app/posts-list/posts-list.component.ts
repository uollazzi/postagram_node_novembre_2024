import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post';
import { RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  imports: [RouterModule],
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
      });
  }

  async elimina(id: string) {
    if (confirm("Sei sicuro?")) {
      try {
        await firstValueFrom(this.postsService.deletePost(id));
        this.posts = await firstValueFrom(this.postsService.getPosts());
      } catch (error) {
        console.log(error);
      }
    }
  }
}
