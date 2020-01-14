import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsService } from './service/posts.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/:postId', component: PostsDetailComponent }
];

@NgModule({
  declarations: [PostsComponent, PostsDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [PostsService]
})
export class PostsModule { }
