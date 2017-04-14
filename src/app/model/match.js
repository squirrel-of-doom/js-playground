import { TeamRecord } from './team-record'

export class Match {
  constructor(date, home, away, homeGoals, awayGoals) {
    this.date = moment(date)

    this.homeTeam = home
    this.awayTeam = away

    this.homeGoals = homeGoals
    this.awayGoals = awayGoals
  }

  homeRecord() {
    return new TeamRecord(this.homeTeam).addResult(this.homeGoals, this.awayGoals)
  }

  awayRecord() {
    return new TeamRecord(this.awayTeam).addResult(this.awayGoals, this.homeGoals)
  }

}
