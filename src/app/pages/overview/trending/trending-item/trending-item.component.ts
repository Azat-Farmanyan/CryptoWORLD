import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-trending-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-item.component.html',
  styleUrl: './trending-item.component.scss',
})
export class TrendingItemComponent implements OnChanges {
  @Input() Data: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.Data);
  }
}
