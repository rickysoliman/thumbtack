import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, PostComponent, MatProgressSpinnerModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  posts: Post[] = [];
  boardId: string = '';
  boardDoesNotExist: boolean = false;
  isLoading: boolean = true;
  boardBannerUrl: string =
    'https://styles.redditmedia.com/t5_2ruhk/styles/bannerBackgroundImage_kkfhkecgv7r81.jpg?width=1448&frame=1&auto=webp&s=4cbe8f68d46cea5c8a726d54fe3b2df43584acd5'; // just hard coding for now for testing

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['board']),
        tap((board) => (this.boardId = board)),
        switchMap((boardId) => this.fetchPosts(boardId))
      )
      .subscribe((posts: any) => {
        this.posts = posts.data.children.map((post: any) => post.data);
        this.isLoading = false;
      });
  }

  fetchPosts(boardId: string): Observable<Post[]> {
    return this.http.get<any>(`https://www.reddit.com/r/${boardId}/.json`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}
