import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchedWord = new BehaviorSubject('');

  constructor() {}
}
