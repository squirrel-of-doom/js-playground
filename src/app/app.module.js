import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { InputCardComponent } from './input-card.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InputCardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
