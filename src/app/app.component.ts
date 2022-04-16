import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Activities', url: '/activities', icon: 'heart' },
    { title: 'Facilities', url: '/facilities', icon: 'barbell' }
  ];
  public labels = ['@dmfitnessexperience'];
  constructor() {}
}
