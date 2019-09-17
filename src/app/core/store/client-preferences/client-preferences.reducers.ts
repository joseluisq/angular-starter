import { ClientPreferences } from './client-preferences.model'
import { ClientPreferencesActions, ClientPreferencesTypes } from './client-preferences.actions'

export const LANGUAGE_DEFAULT = 'en'

export const INITIAL_STATE: ClientPreferences | undefined = undefined

export function clientPreferencesReducer (state = INITIAL_STATE, action: ClientPreferencesActions) {
  switch (action.type) {
    case ClientPreferencesTypes.UPDATE: {
      if (!action.payload) {
        return undefined
      }

      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state
  }
}
