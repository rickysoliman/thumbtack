import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Post, Reply } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-likes-dislikes',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './likes-dislikes.component.html',
  styleUrl: './likes-dislikes.component.scss',
})
export class LikesDislikesComponent {
  @Input() postOrComment!: Post | Reply;

  thumbsUpClicked: boolean = false;
  thumbsDownClicked: boolean = false;

  handleThumbClick(isThumbsUp: boolean): void {
    if (isThumbsUp) {
      if (this.thumbsUpClicked) {
        this.thumbsUpClicked = false;
        this.postOrComment.ups -= 1;
      } else {
        this.thumbsUpClicked = true;
        this.postOrComment.ups += 1;

        if (this.thumbsDownClicked) {
          this.thumbsDownClicked = false;
          this.postOrComment.downs -= 1;
        }
      }
    } else {
      if (this.thumbsDownClicked) {
        this.thumbsDownClicked = false;
        this.postOrComment.downs -= 1;
      } else {
        this.thumbsDownClicked = true;
        this.postOrComment.downs += 1;

        if (this.thumbsUpClicked) {
          this.thumbsUpClicked = false;
          this.postOrComment.ups -= 1;
        }
      }
    }
  }
}
