import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { InputCardComponent } from './input-card.component'

import { FootballDataService } from './services/football-data.service'

import '../styles/styles.css'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    NavBarComponent,
    InputCardComponent,
    AppComponent
  ],
  providers: [
    { provide: 'OLLI_BDATE', useValue: moment('2016-11-18') },
    FootballDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
