import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

import competitions from '../mock-data/competitions.json'
import fixtures from '../mock-data/all-bl-fixtures.json'
import teams from '../mock-data/teams.json'

@Injectable()
export class MockFootballDataHttpService {

  retrieveSeason(season) {
    return Observable.of(competitions)
  }

  retrieveFixtures(season) {
    return Observable.of(fixtures)
  }

  retrieveTeams(season) {
    return Observable.of(teams)
  }

}
