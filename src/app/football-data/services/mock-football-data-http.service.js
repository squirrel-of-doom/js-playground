import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

import competitions from '../mock-data/competitions.json'
import fixturesOlli from '../mock-data/all-bl-fixtures.json'

@Injectable()
export class MockFootballDataHttpService {

  retrieveSeason(season) {
    return Observable.of(competitions)
  }

  retrieveFixtures(date) {
    return Observable.of(fixturesOlli)
  }

}
