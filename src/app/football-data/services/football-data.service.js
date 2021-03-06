import { Injectable } from '@angular/core'

import { FootballDataHttpService } from './football-data-http.service'

import LEAGUES from '../config/leagues.json'
import { Match } from '../../model/match'
import { Club } from '../../model/club'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/distinct'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/single'

@Injectable()
export class FootballDataService {

  static get parameters() {
    return [[FootballDataHttpService]]
  }

  constructor(footballDataHttpService) {
    this.footballDataHttpService = footballDataHttpService
  }

  allLeagues() {
    return Observable.from(LEAGUES)
  }

  leagueSeason(league, season) {
    return this.footballDataHttpService.retrieveSeason(season).mergeMap(
      data => Observable.from(data)
    ).single(
      s => s.league === league
    )
  }

  matchesForSeasons(seasons) {
    return seasons.mergeMap(
      season => this.footballDataHttpService.retrieveFixtures(season.id)
    ).mergeMap(
      data => Observable.from(data.fixtures)
    ).filter(
      fixture => fixture.status === 'FINISHED'
    ).map(
      f => new Match(f.date, f.homeTeamName, f.awayTeamName, f.result.goalsHomeTeam, f.result.goalsAwayTeam)
    )
  }

  clubsForSeasons(seasons) {
    return seasons.mergeMap(
      season => this.footballDataHttpService.retrieveTeams(season.id)
    ).mergeMap(
      data => Observable.from(data.teams)
    ).distinct(
      team => team.name
    ).map(
      team => new Club(team.name, team.code, team.shortName, team.crestUrl)
    )
  }

}
