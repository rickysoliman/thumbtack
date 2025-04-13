import { Component, HostListener } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchControl: FormControl = new FormControl();
  options: Option[] = [];
  isShrunk: boolean = false;

  ngOnInit(): void {
    // this.searchControl.valueChanges.subscribe((val) => {
    //   if (val && val.length > 2) {
    //     this.options = dummyPosts
    //       .filter((post: any) =>
    //         post.title.toLowerCase().includes(val.toLowerCase())
    //       )
    //       .map((post: any) => {
    //         return { title: post.title, image: post.image || null };
    //       });
    //   } else {
    //     this.options = [];
    //   }
    // });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShrunk = window.scrollY > 50;
  }
}
