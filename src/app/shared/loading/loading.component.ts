import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit {
  loadingText: string = 'Loading';
  dots: string = '';
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.updateDots();
    }, 500);
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
}
