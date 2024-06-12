import Preferences from "./prefs";
import Profile from "./profile";
import Stats from "./stats";

/**
 * Actors represent anything that can preform Vore Actions.
 * @examples Charachters created by Users, Bots, and NPCs.
 */
export type Actor = {
  /** The preferred name of the actor. */
  name: string;
  /** The unique key of the actor. */
  key: string;
  stats: Stats;
  prefs: Preferences;
  profile: Profile & {
    default: Profile;
    override: Profile;
  };
};

export default Actor;