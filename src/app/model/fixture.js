export class Fixture {
  constructor(date, home, away, homeGoals, awayGoals) {
    this.date = moment(date)

    this.homeTeam = home
    this.awayTeam = away

    this.homeGoals = homeGoals
    this.awayGoals = awayGoals
  }
}
