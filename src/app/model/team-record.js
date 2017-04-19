const WIN = 'WIN'
const DRAW = 'DRAW'
const LOSS = 'LOSS'

export class TeamRecord {

  static get WIN() { return WIN }
  static get DRAW() { return DRAW }
  static get LOSS() { return LOSS }

  constructor(team) {
    this.team = team

    this.points = 0
    this.goalsFor = 0
    this.goalsAgainst = 0

    this.record = {
      'WIN': 0,
      'DRAW': 0,
      'LOSS': 0
    }
  }

  get teamName() {
    return this.team
  }

  get goalDifference() {
    return this.goalsFor - this.goalsAgainst
  }

  addResult(goalsFor, goalsAgainst) {
    this.goalsFor += goalsFor
    this.goalsAgainst += goalsAgainst

    if (goalsFor > goalsAgainst) {
      this.record[WIN] += 1
      this.points += 3
    } else if (goalsFor == goalsAgainst) {
      this.record[DRAW] += 1
      this.points += 1
    } else if (goalsFor < goalsAgainst) {
      this.record[LOSS] += 1
    }

    return this
  }

  compare(other) {
    if (this.points !== other.points) return (this.points - other.points)
    if (this.goalDifference !== other.goalDifference) return (this.goalDifference - other.goalDifference)
    if (this.goalsFor !== other.goalsFor) return (this.goalsFor - other.goalsFor)
    return 0
  }

}
