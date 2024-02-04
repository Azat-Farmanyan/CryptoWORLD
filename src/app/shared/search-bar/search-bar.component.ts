import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchWordSubs: Subscription;
  searchService = inject(SearchService);

  ngOnInit(): void {
    this.searchWordSubs = this.searchService.searchedWord.subscribe((el) => {
      this.searchedWord = el;
    });
  }

  @Output() onSearch = new EventEmitter<string>();
  searchedWord = '';

  onInput() {
    this.searchService.searchedWord.next(this.searchedWord);
  }

  onCancel() {
    this.searchService.searchedWord.next('');
  }

  ngOnDestroy(): void {
    if (this.searchWordSubs) this.searchWordSubs.unsubscribe();
  }
}
