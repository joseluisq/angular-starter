import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { clientPreferencesReducer } from './client-preferences.reducers'
import { ClientPreferencesEffects } from './client-preferences.effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ ClientPreferencesEffects ]),
    StoreModule.forFeature('client_preferences', clientPreferencesReducer)
  ]
})
export class ClientPreferencesStoreModule { }
