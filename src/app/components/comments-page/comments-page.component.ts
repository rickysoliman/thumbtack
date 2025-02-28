import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyPosts, Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { CommentComponent } from '../comment/comment.component';
import { LikesDislikesComponent } from '../likes-dislikes/likes-dislikes.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    CommentComponent,
    LikesDislikesComponent,
  ],
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.scss',
})
export class CommentsPageComponent {
  postId: string = '';
  post: Post | undefined = undefined;
  showCommentForm: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.post = dummyPosts.find((post) => post.id === this.postId);
    });
  }

  getRelativeTime(date: Date): string {
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor(
      (now.getTime() - postDate.getTime()) / 1000
    );

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 172800) {
      return `yesterday`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }
  }
}
