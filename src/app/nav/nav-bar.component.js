import { Component, Input } from '@angular/core'

@Component({
  selector: 'nav-bar',
  template: require('./nav-bar.component.html'),
  inputs: ['title']
})
export class NavBarComponent {
}
