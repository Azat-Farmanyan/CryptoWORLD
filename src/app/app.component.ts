import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crypto-world';

  activePage: string = '';

  setActivePage(page: string) {
    this.activePage = page;
    // console.log(this.activePage);
  }
}
