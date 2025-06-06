import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Reply } from '../../models/post.model';
import { LikesDislikesComponent } from '../likes-dislikes/likes-dislikes.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, LikesDislikesComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Reply;
  @Input() isReply?: boolean;

  ngOnInit(): void {
    if (this.isReply) {
      this.comment = this.comment.data;
    }
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
}
