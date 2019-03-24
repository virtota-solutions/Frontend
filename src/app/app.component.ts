import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  template: `
      <nav></nav>
        <h1>Hello {{title}}</h1>
      <messages></messages>
      `
})
export class AppComponent {
  title = 'PCV Murcore';
}
