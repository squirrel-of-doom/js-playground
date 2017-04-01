import { Injectable } from '@angular/core'

import { FootballDataHttpService } from './football-data-http.service'

@Injectable()
export class FootballDataService {

  static get parameters() {
    return [[FootballDataHttpService]]
  }

  constructor(footballDataHttpService) {
    this.footballDataHttpService = footballDataHttpService
  }

  getLeagues() {
    return Promise.resolve([
      {
        key: 'BL1',
        name: 'Bundesliga'
      }, {
        key: 'PL',
        name: 'Premier League'
      }
    ])
  }

  getStandings(input) {
    if (!input || !input.league || !input.start) {
      return []
    }

    let startSeason = this.seasonFromMoment(input.start)
    let stopSeason = this.seasonFromMoment(moment())

    let seasons = this.getSeasons(input.league, startSeason, stopSeason)
    this.footballDataHttpService.retrieveSeason(2016).subscribe(x => console.log(x))
    // console.log(this.retrieveSeason(2016))
  }

  seasonFromMoment(m) {
    return m.year() - ((m.month() < 7) ? 1 : 0)
  }

  getSeasons(league, start, stop) {
    return [...Array(stop - start + 1)].map(
      (_, i) => i + start
    ).map(
      season => this.getSeason(league, season)
    )
  }

  getSeason(league, season) {
    return this.footballDataHttpService.retrieveSeason(season).map(
      data => data.filter(
        s => s.league === league
      )
    )
  }

}
