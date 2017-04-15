import { NgModule } from '@angular/core'

import { HttpModule } from '@angular/http'

import { FootballDataService } from './services/football-data.service'
import { FootballDataHttpService } from './services/football-data-http.service'
import { MockFootballDataHttpService } from './services/mock-football-data-http.service'
import { SeasonYearsService } from './services/season-years.service'
import { StandingsService } from './services/standings.service'

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    FootballDataService,
    FootballDataHttpService,
    MockFootballDataHttpService,
    SeasonYearsService,
    StandingsService
  ]
})
export class FootballDataModule { }
