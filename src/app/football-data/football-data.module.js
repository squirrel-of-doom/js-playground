import { NgModule } from '@angular/core'

import { HttpModule } from '@angular/http'

import { FootballDataService } from './services/football-data.service'
import { FootballDataHttpService } from './services/football-data-http.service'

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    FootballDataService,
    FootballDataHttpService
  ]
})
export class FootballDataModule { }
