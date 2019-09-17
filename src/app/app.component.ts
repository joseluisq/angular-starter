import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { RootState } from './core/store/root.state'
import {
  isClientPreferencesUndefined,
  selectClientPreferences,
  selectClientPreferencesByKey
} from './core/store/client-preferences/client-preferences.selectors'
import { ClientPreferencesUpdate } from './core/store/client-preferences/client-preferences.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'angular-store-seed'

  private preferences$ = this.store.pipe(isClientPreferencesUndefined())
  private preferences1$ = this.store.pipe(selectClientPreferences('key-01'))
  private preferences2$ = this.store.pipe(selectClientPreferences('key-02'))

  constructor (private store: Store<RootState>) {}

  ngOnInit () {
    this.preferences$.subscribe((e) => {
      console.log('INIT STATE:', e)
    })

    this.preferences1$.subscribe((e) => {
      console.log('Subscription key-01:', e)
    })

    this.preferences2$.subscribe((e) => {
      console.log('Subscription key-02:', e)
    })
  }

  onClick1 () {
    this.store.dispatch(new ClientPreferencesUpdate({
      ['key-01']: {
        accessKey: 'key-01',
        language: 'es'
      }
    }))
  }

  onClick2 () {
    this.store.dispatch(new ClientPreferencesUpdate({
      ['key-02']: {
        accessKey: 'key-02',
        language: 'de'
      }
    }))
  }

  onClick3 () {
    this.store.dispatch(new ClientPreferencesUpdate(undefined))
  }
}
