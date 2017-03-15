import { Component, EventEmitter } from '@angular/core'

import { InputData } from './model/input-data'
import { FootballDataService } from './services/football-data.service'

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
    this.selectedCompetition = undefined
    this.start = moment().subtract(4, 'weeks')

    footballDataService.getLeagues().then(leagues => {
      this.competitions = leagues
    })

    this.OLLI_BDATE = OLLI_BDATE
    this.input = new EventEmitter()
  }

  setOllisBirthday() {
    this.start = this.OLLI_BDATE
  }

  onSubmit() {
    this.input.emit(new InputData(this.selectedCompetition, this.start))
  }

  ngAfterContentInit() {
    this.picker = $('#start-date').pickadate({
      format: 'yyyy-mm-dd',
      onSet: (x) => {
        this.start = moment(x.select)
        this.picker.pickadate('close')
      },
      onClose: () => $(document.activeElement).blur()
    })
  }

  ngDoCheck() {
    this.reInitializeLeagueSelect()
    this.updateStartDateInput(this.start.format('YYYY-MM-DD'))
    this.leagueSelectChangeListener($('#league').val())
  }

  reInitializeLeagueSelect() {
    if (! $('#league option').is(this._options)) {
      $('#league').material_select()
      this._options = $('#league option')
      // TODO preselect first entry!
    }
  }

  updateStartDateInput(startString) {
    if (this.picker && this.picker.pickadate('get') !== startString) {
      this.picker.pickadate('picker').set('select', startString)
    }
  }

  leagueSelectChangeListener(selected) {
    if (selected && (!this.selectedCompetition || this.selectedCompetition.key !== selected)) {
      this.selectedCompetition = this.competitions.find(c => c.key === selected)
    }
  }

}
