import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { Post } from '../model/post';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit, OnDestroy {
  post: Post;
  routeSubscription$: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSubscription$ = this.route.params.subscribe((params: Params) => {
      const postId = +params['postId'];
      this.loadPost(postId);
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription$) {
      this.routeSubscription$.unsubscribe();
    }
  }

  loadPost(postId: number) {
    this.postsService.getPostById(postId).pipe(

      catchError(error => {
        this.post = null;
        return throwError(error);
      }))

      .subscribe((post: Post) => {
        this.post = post;
      });
  }

  showHomePage() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
