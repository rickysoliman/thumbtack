import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  posts: Post[] = [];
  boardId: string = '';
  boardDoesNotExist: boolean = false;

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
