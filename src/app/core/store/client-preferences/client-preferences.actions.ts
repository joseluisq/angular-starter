import { Action } from '@ngrx/store'
import { ClientPreferencesMap } from './client-preferences.model'

export enum ClientPreferencesTypes {
  UPDATE = '[Client Preferences] Update',
  UPDATED = '[Client Preferences] Updated'
}

export class ClientPreferencesUpdate implements Action {
  public readonly type = ClientPreferencesTypes.UPDATE

  constructor (public payload: Partial<ClientPreferencesMap> | undefined) {}
}

export class ClientPreferencesUpdated implements Action {
  public readonly type = ClientPreferencesTypes.UPDATED

  constructor (public payload: Partial<ClientPreferencesMap> | undefined) {}
}

export type ClientPreferencesActions = ClientPreferencesUpdate | ClientPreferencesUpdated
