import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyPosts, Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  postId: string = '';
  post: Post | undefined = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.post = dummyPosts.find((post) => post.id === this.postId);
    });
  }
}
