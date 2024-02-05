import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Subscription, debounceTime } from 'rxjs';
import { MenuParamsService } from '../../services/menuParams.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() onSearch = new EventEmitter<string>();
  @Input() activePage: string = 'Search any things in';

  searchWordSubs: Subscription;
  routerSubs: Subscription;
  searchService = inject(SearchService);
  menuParamsService = inject(MenuParamsService);
  router = inject(Router);

  placeholder: string = '';

  ngOnInit(): void {
    this.searchWordSubs = this.searchService.searchedWord.subscribe((el) => {
      this.searchedWord = el;
    });

    this.routerSubs = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setPlaceholder(val.url.slice(1));

        this.searchService.searchedWord.next('');
      }
    });
  }

  searchedWord = '';

  onInput() {
    this.searchService.searchedWord.next(this.searchedWord);
  }

  setPlaceholder(currentPage: string) {
    this.placeholder = 'Search in ' + currentPage;
  }

  onCancel() {
    this.searchService.searchedWord.next('');
  }

  ngOnDestroy(): void {
    if (this.searchWordSubs) this.searchWordSubs.unsubscribe();
    if (this.routerSubs) this.routerSubs.unsubscribe();
  }
}
