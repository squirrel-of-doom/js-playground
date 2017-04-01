import { Component } from '@angular/core'

@Component({
  selector: 'olli-standings',
  template: `
    <nav-bar [title]="appTitle"></nav-bar>
    <div class="container">
      <div class="section">
        <input-card (input)="onInput($event)"></input-card>
        <br/>
        <result-card [parameters]="input"></result-card>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor() {
    this.appTitle = 'Olli standings'
  }

  onInput(inputData) {
    this.input = inputData
  }

}
