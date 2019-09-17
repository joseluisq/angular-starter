import { createSelector, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { RootState } from '../../store/root.state'
import { filter } from 'rxjs/operators'

export const selectAll = (state: RootState) => state.client_preferences

export const selectClientPreferencesAll = createSelector(
  selectAll,
  (state) => state
)

export const selectClientPreferencesByKey = (accessKey: string) => createSelector(
  selectClientPreferencesAll,
  (state) => {
    for (const key in state) {
      if (state.hasOwnProperty(key) && key === accessKey) {
        const preference = state[key]
        return preference
      }
    }

    return undefined
  }
)

export function selectClientPreferences (accessKey: string) {
  return (source: Observable<RootState>) => source.pipe(
    select(selectClientPreferencesByKey(accessKey)),
    filter((state) => typeof state !== 'undefined')
  )
}

export function isClientPreferencesUndefined () {
  return (source: Observable<RootState>) => source.pipe(
    select(selectClientPreferencesAll),
    filter((state) => typeof state === 'undefined')
  )
}
