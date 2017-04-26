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

    this._standingsService.standings(p).toArray().subscribe(
      x => this.standings = x.sort((a, b) => a.compare(b)).reverse()
    )
  }

  get parameters() {
    return this.parametersValue
  }

}
