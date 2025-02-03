import { Component } from '@angular/core';
import { UserActionsComponent } from '../../user-actions/user-actions.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { dummyPosts } from '../../models/post.model';

interface Option {
  title: string;
  image: string | null;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UserActionsComponent,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchControl: FormControl = new FormControl();
  options: Option[] = [];

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((val) => {
      if (val && val.length > 2) {
        this.options = dummyPosts
          .filter((post) =>
            post.title.toLowerCase().includes(val.toLowerCase())
          )
          .map((post) => {
            return { title: post.title, image: post.image || null };
          });
      } else {
        this.options = [];
      }
    });
  }
}
