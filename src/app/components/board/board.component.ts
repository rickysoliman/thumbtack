import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['board']),
        tap((board) => {
          this.boardId = board;
          this.isLoading = true;
          this.boardDoesNotExist = false;
        }),
        switchMap((boardId) =>
          combineLatest([this.fetchPosts(boardId), this.fetchAbout(boardId)])
        ),
        catchError((error) => {
          console.error('Error fetching board data:', error);
          this.boardDoesNotExist = true;
          this.isLoading = false;
          return of([[], { data: {} }]);
        })
      )
      .subscribe(([posts, about]) => {
        this.posts = posts?.data?.children?.map((post: any) => post.data) || [];

        this.isLoading = false;
      });
  }

  fetchPosts(boardId: string): Observable<any> {
    return this.http.get<any>(`https://www.reddit.com/r/${boardId}/.json`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  fetchAbout(boardId: string): Observable<any> {
    return this.http
      .get<any>(`https://www.reddit.com/r/${boardId}/about.json`)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }
}
