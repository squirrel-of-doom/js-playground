import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/range'

@Injectable()
export class SeasonYearsService {

  seasonYears(start, stop) {
    let startSeason = this.identifySeason(start)
    let stopSeason = this.identifySeason(stop)

    return Observable.range(startSeason, stopSeason - startSeason + 1)
  }

  identifySeason(m) {
    m = m || moment()
    return m.year() - ((m.month() < 7) ? 1 : 0)
  }

}
