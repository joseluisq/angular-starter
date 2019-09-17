import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map } from 'rxjs/operators'

import { ClientPreferencesTypes, ClientPreferencesUpdate, ClientPreferencesUpdated } from './client-preferences.actions'

@Injectable()
export class ClientPreferencesEffects {

  @Effect()
  public clientPreferences$ = this.actions$.pipe(
    ofType<ClientPreferencesUpdate>(ClientPreferencesTypes.UPDATE),
    map(({ payload }) => new ClientPreferencesUpdated(payload))
  )

  constructor (private actions$: Actions) { }
}
