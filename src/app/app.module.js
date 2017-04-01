import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { NavBarComponent } from './nav/nav-bar.component'
import { DatepickerComponent } from './components/datepicker.component'
import { LeagueSelectComponent } from './components/league-select.component'
import { InputCardComponent } from './input-card.component'
import { ResultCardComponent } from './result-card.component'
import { AppComponent } from './app.component'

import { FootballDataService } from './services/football-data.service'
import { FootballDataHttpService } from './services/football-data-http.service'

import '../styles/styles.css'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    NavBarComponent,
    DatepickerComponent,
    LeagueSelectComponent,
    InputCardComponent,
    ResultCardComponent,
    AppComponent
  ],
  providers: [
    { provide: 'OLLI_BDATE', useValue: moment('2016-11-18') },
    FootballDataService,
    FootballDataHttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
