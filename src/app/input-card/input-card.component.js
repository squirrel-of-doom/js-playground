import { Component, EventEmitter } from '@angular/core'

import { InputData } from '../model/input-data'
import { FootballDataService } from '../football-data/services/football-data.service'

import 'rxjs/add/operator/first'

@Component({
  selector: 'input-card',
  template: require('./input-card.component.html'),
  outputs: [
    'input'
  ]
})
export class InputCardComponent {

  static get parameters() {
    return [[FootballDataService], 'OLLI_BDATE']
  }

  constructor(footballDataService, @Inject('OLLI_BDATE') OLLI_BDATE) {
    this.league = undefined
    this.start = moment().subtract(4, 'weeks')

    let leagues = footballDataService.allLeagues()
    leagues.toArray().subscribe(
      l => this.leagues = l
    )
    leagues.first().subscribe(
      l => this.league = l
    )

    this.OLLI_BDATE = OLLI_BDATE
    this.input = new EventEmitter()
  }

  useOllisBirthday() {
    this.start = this.OLLI_BDATE
    $('#bdate').blur()
  }

  onSubmit() {
    this.input.emit(new InputData(this.league, this.start))
    $('#submit').blur()
  }

  ngAfterViewInit() {
    this.start = moment().subtract(4, 'weeks')
  }

}
