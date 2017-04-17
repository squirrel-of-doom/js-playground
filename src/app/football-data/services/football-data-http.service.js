import { Injectable } from '@angular/core'
import { Http, BaseRequestOptions, Headers, URLSearchParams } from '@angular/http'

import 'rxjs/add/operator/map'

import KEYS from '../config/keys.json'

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

  retrieveSeason(seasonYear) {
    const url = `${BASE_URL}/competitions?season=${seasonYear}`
    return this.performGet(url)
  }

  retrieveFixtures(seasonId) {
    const url = `${BASE_URL}/competitions/${seasonId}/fixtures`
    return this.performGet(url)
  }

  retrieveTeams(seasonId) {
    const url = `${BASE_URL}/competitions/${seasonId}/teams`
    return this.performGet(url)
  }

  performGet(url) {
    return this.http.get(url, new BaseRequestOptions().merge({
      headers: new Headers({
        'X-Auth-Token': API_KEY
      })
    })).map(resp => resp.json())
  }

}
