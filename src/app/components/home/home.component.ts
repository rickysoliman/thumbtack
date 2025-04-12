import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts().subscribe((resp: any) => {
      this.posts = resp.data.children.map((post: any) => post.data);
      console.log({ posts: this.posts });
    });
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://www.reddit.com/.json');
  }
}
