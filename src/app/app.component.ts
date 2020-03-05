import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator-Angular';
  currentTab = '';
  constructor(private router: Router) {
    this.router.navigateByUrl('/calculator');
    console.log(this.router.url);
    this.currentTab =
      this.router.url === '/converter'
        ? 'Converter'
        : this.router.url === '/calculator'
        ? 'Calculator'
        : 'this.router.url';
  }
}
