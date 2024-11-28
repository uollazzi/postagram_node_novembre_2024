import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostDTO } from '../models/post';
import { JsonPipe } from '@angular/common';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-post-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  postsService = inject(PostsService);
  router = inject(Router);

  model: PostDTO = { title: "", author: "", body: "", hidden: false };
  errorMessage = "";

  async salvaPost() {
    // this.postsService.addPost(this.model)
    //   .subscribe(p => {
    //     this.router.navigate(["/"]);
    //   });

    try {
      const r = await firstValueFrom(this.postsService.addPost(this.model));
      this.router.navigate(["/"]);
    } catch (error) {
      console.log(error);
      this.errorMessage = "Si è verificato un errore durante il salvataggio.";
    }
  }
}
