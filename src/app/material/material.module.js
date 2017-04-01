import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { DatepickerComponent } from './datepicker.component'
import { LeagueSelectComponent } from './league-select.component'

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DatepickerComponent,
    LeagueSelectComponent
  ],
  exports: [
    DatepickerComponent,
    LeagueSelectComponent
  ]
})
export class MaterialModule { }
