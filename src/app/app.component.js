import { Component } from '@angular/core'

@Component({
  selector: 'olli-standings',
  template: `
    <nav-bar [title]="appTitle"></nav-bar>
    <div class="container">
      <div class="section">
        <input-card></input-card>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor() {
    this.appTitle = 'Olli standings'
  }
}
