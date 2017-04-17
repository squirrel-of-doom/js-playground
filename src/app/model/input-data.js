export class InputData {
  constructor(league, start, stop) {
    this.league = league
    this.start = start
    this.stop = stop || moment()
  }
}
