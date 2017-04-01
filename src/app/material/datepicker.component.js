import { Component, EventEmitter } from '@angular/core'

@Component({
  selector: 'datepicker',
  template: `
    <input type="date" class="datepicker" name="start"/>
  `,
  inputs: [
    'date'
  ],
  outputs: [
    'dateChange'
  ]
})
export class DatepickerComponent {
  constructor() {
    this.dateValue = undefined
    this.dateChange = new EventEmitter()
  }

  ngAfterContentInit() {
    this.picker = $('.datepicker').pickadate({
      format: 'yyyy-mm-dd',
      onSet: (x) => {
        this.picker.pickadate('close')
        this.dateValue = moment(x.select)
        this.dateChange.emit(this.dateValue)
      },
      onClose: () => $(document.activeElement).blur()
    })
  }

  get date() {
    return this.dateValue
  }

  set date(d) {
    if (d && this.picker && this.picker.pickadate('get') !== d.format('YYYY-MM-DD')) {
      setTimeout(_ => {
        this.picker.pickadate('picker').set('select', d.format('YYYY-MM-DD'))
      }, 1)
    }
  }
}
