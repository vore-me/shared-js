import { Preferences } from "./prefs";

export type Rules
  = Omit<Preferences, 'role'>
  & {
  }

export default Rules;