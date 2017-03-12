import { Injectable } from '@angular/core'

@Injectable()
export class FootballDataService {
  getLeagues() {
    return Promise.resolve([
      {
        key: 'BL1',
        name: 'Bundesliga'
      }, {
        key: 'PL',
        name: 'Premier League'        
      }
    ])
  }
}
