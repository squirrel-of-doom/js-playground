import { NgModule } from '@angular/core'

import { NavBarComponent } from './nav/nav-bar.component'

@NgModule({
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    { provide: 'OLLI_BDATE', useValue: moment('2016-11-18') }
  ]
})
export class CoreModule { }
