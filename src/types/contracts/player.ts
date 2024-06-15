import Actor from '../actor';
import { Rules } from '../rules';

export type Player
  = {
    actor: Actor;
    story: string;
    role: string;
    prefs: Rules;
  }

export default Player;