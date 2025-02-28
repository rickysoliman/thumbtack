import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Post, Reply } from '../../models/post.model';

@Component({
  selector: 'app-likes-dislikes',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './likes-dislikes.component.html',
  styleUrl: './likes-dislikes.component.scss',
})
export class LikesDislikesComponent {
  @Input() postOrComment!: Post | Reply;
}
