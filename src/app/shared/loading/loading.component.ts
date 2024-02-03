import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit {
  @Output() onReload = new EventEmitter();

  loadingText: string = 'Loading';
  dots: string = '';
  interval: any;

  returnBtn = false;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.updateDots();
    }, 500);

    setTimeout(() => {
      this.returnBtn = true;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateDots() {
    if (this.dots.length < 3) {
      this.dots += '.';
    } else {
      this.dots = '';
    }
  }

  reload() {
    this.onReload.emit();
  }
}
