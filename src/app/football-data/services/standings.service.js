import { Injectable } from '@angular/core'

import { FootballDataService } from './football-data.service'
import { SeasonYearsService } from './season-years.service'

import { Match } from '../../model/match'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/groupBy'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/share'

@Injectable()
export class StandingsService {

  static get parameters() {
    return [[FootballDataService], [SeasonYearsService]]
  }

  constructor(footballDataService, seasonYearsService) {
    this.footballDataService = footballDataService
    this.seasonYearsService = seasonYearsService
  }

  standings(input) {
    if (!input || !input.league || !input.start) {
      return Observable.empty()
    }

    let seasons = this.seasonYearsService.seasonYears(input.start, input.stop).mergeMap(
      seasonYear => this.footballDataService.leagueSeason(input.league.key, seasonYear)
    )

    let clubs = this.footballDataService.clubsForSeasons(seasons).share()

    return this.footballDataService.matchesForSeasons(seasons).filter(
      match => match.date.isSameOrAfter(input.start)
    ).mergeMap(
      match => Observable.of(match.homeRecord(), match.awayRecord())
    ).groupBy(
      record => record.teamName
    ).mergeMap(
      recordStream => recordStream.reduce(
        (standing, record) => standing.addResult(record.goalsFor, record.goalsAgainst)
      ).single().do(
        standing => clubs.single(club => club.name === standing.team).subscribe(club => standing.team = club)
      )
    )
  }

}
