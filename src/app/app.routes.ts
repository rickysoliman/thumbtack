import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'b/:board', component: BoardComponent },
];
