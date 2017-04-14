import { Component } from '@angular/core'

import { FootballDataService } from '../football-data/services/football-data.service'

import { InputData } from '../model/input-data'

import 'rxjs/add/operator/toArray'

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
  }

  set parameters(p) {
    this.parametersValue = p

    this._dataService.getStandings({
      'league': 'BL1',
      'start': moment('2017-02-21')
    }).toArray().subscribe(
      x => {
        console.log(x)
        this.standings = x
      }
    )
  }

  get parameters() {
    return this.parametersValue
  }

}
