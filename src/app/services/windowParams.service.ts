import { Injectable, OnInit, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuParamsService } from './menuParams.service';

@Injectable({
  providedIn: 'root',
})
export class WindowParamsService {
  windowWidth = new BehaviorSubject<number>(window.innerWidth);
  contentWidth = new BehaviorSubject<number>(window.innerWidth);
  constructor() {}
}
