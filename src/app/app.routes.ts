import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { CommentsPageComponent } from './components/comments-page/comments-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'b/:board', component: BoardComponent },
  { path: 'b/:board/comments/:id', component: CommentsPageComponent },
  { path: 'search', component: SearchResultsPageComponent },
];
