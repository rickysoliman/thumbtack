import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'b/:board', component: BoardComponent },
  { path: 'b/:board/comments/:id', component: CommentsComponent },
];
