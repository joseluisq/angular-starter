import { NgModule, Optional, SkipSelf } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

export { RootState } from './root.state'

// Store-feature modules
import { ClientPreferencesStoreModule } from './client-preferences/client-preferences.store.module'

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    ClientPreferencesStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: true
    })
  ]
})
export class RootStoreModule {
  constructor (@Optional() @SkipSelf() parentModule: RootStoreModule) {
    if (parentModule) {
      throw new Error(
        'Global `RootStoreModule` is already loaded. Import it in the `AppModule` only'
      )
    }
  }
}
