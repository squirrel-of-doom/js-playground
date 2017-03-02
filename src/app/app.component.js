import { Component } from '@angular/core'

@Component({
  selector: 'olli-standings',
  template: `
    <h1 class="header teal-text">{{appTitle}}</h1>
    <input-card></input-card>
  `
})
export class AppComponent {
  constructor() {
    this.appTitle = 'Olli standings'
  }
}
