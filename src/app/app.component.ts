import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        switch (routerEvent.urlAfterRedirects) {
          case '/converter':
            this.currentTab = 'Converter';
            break;
          case '/calculator':
            this.currentTab = 'Calculator';
            break;
          default:
            this.currentTab = '';
            break;
        }
      }
    });
  }
}
