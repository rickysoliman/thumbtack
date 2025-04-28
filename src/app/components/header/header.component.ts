import { Component, HostListener } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

interface Option {
  title: string;
  image: string | null;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchControl: FormControl = new FormControl();
  lastSearch: string = ''; // persist search query after navigation
  options: any[] = [];
  isShrunk: boolean = false;
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        switchMap((val) => {
          if (val.length > 3) {
            this.isLoading = true;
            this.lastSearch = val;
            return this.search(val);
          } else {
            this.options = [];
            return of(null);
          }
        })
      )
      .subscribe((resp) => {
        if (resp) {
          this.options = resp.data.children.map((post: any) => {
            return {
              title: post.data.title,
              thumbnail: this.getThumbnailUrl(post.data),
              board: post.data.subreddit,
              id: post.data.id,
            };
          });
        }
        this.isLoading = false;
      });
  }

  search(query: string): Observable<any> {
    return this.http.get<any[]>(
      `https://www.reddit.com/search.json?q=${query}`
    );
  }

  handleOptionClick(option: any): void {
    this.searchControl.setValue(this.lastSearch); // persist search query after navigation
    this.router.navigate(['b', option.board, 'comments', option.id]);
  }

  handleSearchClick(): void {
    this.searchControl.setValue(this.lastSearch); // persist search query after navigation
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchControl.value },
    });
  }

  handleEnterKeyDown(): void {
    if (!this.searchControl.value) return;

    this.handleSearchClick();
  }

  getThumbnailUrl = (post: any): string | null => {
    if (post.is_video && post.preview?.images?.[0]?.source?.url) {
      return post.preview.images[0].source.url.replace(/&amp;/g, '&');
    }

    if (post.thumbnail && post.thumbnail.startsWith('http')) {
      return post.thumbnail.replace(/&amp;/g, '&');
    }

    return null;
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShrunk = window.scrollY > 50;
  }
}
