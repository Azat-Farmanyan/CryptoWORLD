import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuParamsService {
  menuIsOpen = new BehaviorSubject<boolean>(window.innerWidth > 700);

  constructor() {}
}
