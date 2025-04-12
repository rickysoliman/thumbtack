import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dummyPosts, Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.boardId = params['board'];
      this.posts = dummyPosts.filter(
        (post: any) => post.board === this.boardId
      );
      if (!this.posts.length) {
        this.boardDoesNotExist = true;
      }
    });
  }
}
