import { NgModule } from '@angular/core'

import { CoreModule } from './core/core.module'
import { FootballDataModule } from './football-data/football-data.module'
import { InputCardModule } from './input-card/input-card.module'
import { ResultCardModule } from './result-card/result-card.module'

import { AppComponent } from './app.component'

import '../styles/styles.css'

@NgModule({
  imports: [
    CoreModule,
    FootballDataModule,
    InputCardModule,
    ResultCardModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
