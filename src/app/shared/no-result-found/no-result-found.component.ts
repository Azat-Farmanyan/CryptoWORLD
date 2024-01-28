import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-no-result-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-result-found.component.html',
  styleUrl: './no-result-found.component.scss',
})
export class NoResultFoundComponent {}
