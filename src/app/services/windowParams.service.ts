import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowParamsService {
  windowWidth = new BehaviorSubject<number>(window.innerWidth);
  constructor() {}
}
