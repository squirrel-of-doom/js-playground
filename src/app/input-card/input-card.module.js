import { NgModule } from '@angular/core'

import { MaterialModule } from '../material/material.module'
import { SharedModule } from '../shared/shared.module'

import { InputCardComponent } from './input-card.component'

@NgModule({
  imports: [
    MaterialModule,
    SharedModule
  ],
  declarations: [
    InputCardComponent
  ],
  exports: [
    InputCardComponent
  ]
})
export class InputCardModule { }
