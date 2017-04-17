import { Component } from '@angular/core'

import { StandingsService } from '../football-data/services/standings.service'

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
    return [[StandingsService]]
  }

  constructor(standingsService) {
    this._standingsService = standingsService
  }

  set parameters(p) {
    this.parametersValue = p

    let dummyParameters = {
      'league': 'BL1',
      'start': moment('2017-02-21')
    }

    this._standingsService.standings(dummyParameters).toArray().subscribe(
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
