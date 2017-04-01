import { Component } from '@angular/core'

import { FootballDataService } from '../football-data/services/football-data.service'

import { InputData } from '../model/input-data'

@Component({
  selector: 'result-card',
  template: require('./result-card.component.html'),
  inputs: [
    'parameters'
  ]
})
export class ResultCardComponent {

  static get parameters() {
    return [[FootballDataService]]
  }

  constructor(footballDataService) {
    this._dataService = footballDataService
    // footballDataService.retrieveFixtures('BL1', moment('2017-02-21'), moment('2017-03-21')).subscribe(resp =>
    //   this.fixtures = resp
    // )
  }

  set parameters(p) {
    this.parametersValue = p

    this.standings = this._dataService.getStandings({
      'league': 'BL1',
      'start': moment('2017-02-21')
    })
  }

  get parameters() {
    return this.parametersValue
  }

}
