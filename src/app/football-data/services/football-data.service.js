import { Injectable } from '@angular/core'

// import { FootballDataHttpService } from './football-data-http.service'
import { MockFootballDataHttpService } from './mock-football-data-http.service'

import LEAGUES from '../config/leagues.json'
import { Match } from '../../model/match'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/range'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/groupBy'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/single'

@Injectable()
export class FootballDataService {

  static get parameters() {
    return [[MockFootballDataHttpService]]
    // return [[FootballDataHttpService]]
  }

  constructor(footballDataHttpService) {
    this.footballDataHttpService = footballDataHttpService
  }

  getLeagues() {
    return Observable.from(LEAGUES)
  }

  getStandings(input) {
    if (!input || !input.league || !input.start) {
      return Observable.empty()
    }

    let startSeason = this.identifySeason(input.start)
    let stopSeason = this.identifySeason()

    let seasons = Observable.range(startSeason, stopSeason - startSeason + 1).mergeMap(
      season => this.getSeason(input.league, season)
    )

    let matches = this.matchesForSeasons(seasons).filter(
      match => match.date.isSameOrAfter(input.start)
    )

    let records = matches.mergeMap(
      match => Observable.of(match.homeRecord(), match.awayRecord())
    ).groupBy(
      record => record.teamName
    ).mergeMap(
      recordStream => recordStream.reduce(
        (standing, record) => standing.addResult(record.goalsFor, record.goalsAgainst)
      )
    )

    return records
  }

  getSeason(league, season) {
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

  identifySeason(m) {
    m = m || moment()
    return m.year() - ((m.month() < 7) ? 1 : 0)
  }

}
