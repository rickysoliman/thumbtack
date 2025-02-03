import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dummyPosts, Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostComponent, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  posts: Post[] = dummyPosts;
}
