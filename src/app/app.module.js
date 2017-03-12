import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { InputCardComponent } from './input-card.component'

import '../styles/styles.css'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    InputCardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
