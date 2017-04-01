import { Injectable } from '@angular/core'
import { Http, BaseRequestOptions, Headers, URLSearchParams } from '@angular/http'

import 'rxjs/add/operator/map'

import { KEYS } from '../config/keys'

const BASE_URL = 'https://api.football-data.org/v1'
const API_KEY = KEYS['api-key']

@Injectable()
export class FootballDataHttpService {

  static get parameters() {
    return [[Http]]
  }

  constructor(http) {
    this.http = http
  }

  retrieveSeason(season) {
    const url = `${BASE_URL}/competitions?season=${season}`
    return this.performGet(url)
  }

  // retrieveFixtures(league, from, to) {
  //   const fixturesUrl = 'http://api.football-data.org/v1/fixtures'
  //   let requestUrl = `${fixturesUrl}?timeFrameStart=${from.format('YYYY-MM-DD')}&timeFrameEnd=${to.format('YYYY-MM-DD')}&league=${league}`
  //   return this.http.get(requestUrl)
  // }

  performGet(url) {
    return this.http.get(url, new BaseRequestOptions().merge({
      headers: new Headers({
        'X-Auth-Token': API_KEY
      })
    })).map(resp => resp.json())
  }

}
