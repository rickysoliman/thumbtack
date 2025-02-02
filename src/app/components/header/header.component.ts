import { Component } from '@angular/core';
import { UserActionsComponent } from '../../user-actions/user-actions.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserActionsComponent, MatAutocompleteModule, FormsModule, ReactiveFormsModule, AsyncPipe, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchControl: FormControl = new FormControl();
  options: string[] = [];

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
