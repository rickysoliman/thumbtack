import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post!: Post;

  getRelativeTime(date: Date): string {
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

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
