import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) activePage: string = '';
}
