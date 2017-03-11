import { Component } from '@angular/core'

@Component({
  selector: 'input-card',
  template: require('./input-card.component.html')
})
export class InputCardComponent {
  constructor() {
    this.competition = 'Bundesliga'
    this.start = moment('2016-11-18')
  }

  ngAfterContentInit() {
    this.picker = $('#start-date').pickadate({
      format: 'yyyy-mm-dd',
      onSet: (x) => {
        console.log("onSet: ", x.select)
        this.start = moment(x.select)
        this.picker.pickadate('close')
      },
      onClose: () => $(document.activeElement).blur()
    })
    console.log(this.start)
    this.picker.pickadate('picker').set('select', this.start.format('YYYY-MM-DD'))
  }

}
