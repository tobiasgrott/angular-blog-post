import { Component, OnInit } from '@angular/core';
import { PostsService } from './service/posts.service';
import { Observable } from 'rxjs';
import { Post } from './model/post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }

  showDetails(post: Post) {
    this.router.navigate(['posts', post.id], { relativeTo: this.route });
  }

}
