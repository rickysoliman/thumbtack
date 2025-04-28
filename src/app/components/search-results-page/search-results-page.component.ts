import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.scss',
})
export class SearchResultsPageComponent {
  searchQuery: string = '';
  results: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        map((params) => {
          return params['q'];
        }),
        switchMap((query) => this.fetchSearchResults(query))
      )
      .subscribe((resp: any) => {
        this.results = resp.data.children.map((child: any) => child.data);
      });
  }

  fetchSearchResults(query: string): Observable<any> {
    return this.http.get<any>(`https://www.reddit.com/search.json?q=${query}`);
  }
}
