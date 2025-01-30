import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post!: Post;
}
