import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { CommentComponent } from '../comment/comment.component';
import { LikesDislikesComponent } from '../likes-dislikes/likes-dislikes.component';
import { TextBoxComponent } from '../text-box/text-box.component';
import { map, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-comments-page',
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    CommentComponent,
    LikesDislikesComponent,
    TextBoxComponent,
  ],
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.scss',
})
export class CommentsPageComponent {
  boardName: string = '';
  post: any | undefined = undefined;
  comments: any[] = [];
  showCommentForm: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['id']),
        tap((id) => (this.boardName = this.route.snapshot.params['board'])),
        switchMap((postId) => this.fetchPost(postId))
      )
      .subscribe((resp: any) => {
        this.post = resp[0].data.children[0].data;
        this.comments = resp[1].data.children.map(
          (comment: any) => comment.data
        );
      });
  }

  fetchPost(postId: string): Observable<Post[]> {
    return this.http
      .get<any>(
        `https://www.reddit.com/r/${this.boardName}/comments/${postId}.json`
      )
      .pipe(map((resp) => resp));
  }

  getRelativeTime(date: number): string {
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

  decodeHtmlEntities(str: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }
}
