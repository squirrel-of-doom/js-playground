import { Component, EventEmitter } from '@angular/core'

var instanceCount = 0

@Component({
  selector: 'league-select',
  template: `
    <select [attr.id]="id" name="league" [(ngModel)]="currentLeague">
      <option *ngFor="let league of leagues" [value]="league.key">{{league.name}}</option>
    </select>
  `,
  inputs: [
    'leagues',
    'currentLeague'
  ],
  outputs: [
    'currentLeagueChange'
  ]
})
export class LeagueSelectComponent {
  constructor() {
    this._leagues = []
    this.id = 'league-select-' + ++instanceCount

    this.currentLeagueValue = undefined
    this.currentLeagueChange = new EventEmitter()
  }

  set leagues(value) {
    this._leagues = value
  }

  get leagues() {
    return this._leagues
  }

  set currentLeague(value) {
    this.currentLeagueValue = value
    this.element().val(value && value.key)
  }

  get currentLeague() {
    return this.currentLeagueValue
  }

  ngAfterViewChecked() {
    if (!this.options().is(this._options)) {
      this.element().material_select('destroy')
      this.element().material_select()
      this._options = this.options()
    }
    this.leagueChangeListener(this.element().val())
  }

  leagueChangeListener(selected) {
    if (selected && (!this.currentLeagueValue || this.currentLeagueValue.key !== selected)) {
      this.currentLeagueValue = this.leagues.find(c => c.key === selected)
      setTimeout(_ => this.currentLeagueChange.emit(this.currentLeagueValue), 1)
    }
  }

  element() {
    return $(`#${this.id}`)
  }

  options() {
    return $(`#${this.id} option`)
  }

}
