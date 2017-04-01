import { Component, EventEmitter } from '@angular/core'

import { InputData } from '../model/input-data'
import { FootballDataService } from '../football-data/services/football-data.service'

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

    footballDataService.getLeagues().then(leagues => {
      this.competitions = leagues
      this.league = leagues[0]
    })

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
