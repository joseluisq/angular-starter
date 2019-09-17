import { ClientPreferences } from './client-preferences/client-preferences.model'

/** Contains the root state with all features */
export interface RootState {
  client_preferences: ClientPreferences
}
