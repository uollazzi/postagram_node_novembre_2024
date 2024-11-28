import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';

export const routes: Routes = [
  {
    path: "", component: PostsListComponent
  },
  {
    path: "add", component: PostAddComponent
  }
];
