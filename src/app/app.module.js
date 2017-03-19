import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { NavBarComponent } from './nav/nav-bar.component'
import { DatepickerComponent } from './components/datepicker.component'
import { LeagueSelectComponent } from './components/league-select.component'
import { InputCardComponent } from './input-card.component'
import { AppComponent } from './app.component'

import { FootballDataService } from './services/football-data.service'

import '../styles/styles.css'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    NavBarComponent,
    DatepickerComponent,
    LeagueSelectComponent,
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
