import Actor from '../actor';
import Preferences from '../prefs';
import { Rules } from '../rules';

export type Player
  = Actor
  & {
    story: string;
    role: string;
    prefs: Rules;
  }

export default Player;