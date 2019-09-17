export interface ClientPreferences {
  accessKey: string
  language: string
}

export interface ClientPreferencesMap {
  [accessKey: string]: ClientPreferences
}
