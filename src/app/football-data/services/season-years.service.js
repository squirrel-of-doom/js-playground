import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/expand'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeWhile'

@Injectable()
export class SeasonYearsService {

  seasonYears(start) {
    let stop = this.identifySeason()

    return Observable.of(start).map(
      date => this.identifySeason(date)
    ).expand(
      seasonYear => Observable.of(seasonYear + 1)
    ).takeWhile(
      seasonYear => (seasonYear <= stop)
    )
  }

  identifySeason(m) {
    m = m || moment()
    return m.year() - ((m.month() < 7) ? 1 : 0)
  }

}