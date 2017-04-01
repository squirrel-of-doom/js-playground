import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { ResultCardComponent } from './result-card.component'

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ResultCardComponent
  ],
  exports: [
    ResultCardComponent
  ]
})
export class ResultCardModule { }
