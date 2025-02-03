import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './user-actions.component.html',
  styleUrl: './user-actions.component.css',
})
export class UserActionsComponent {}
