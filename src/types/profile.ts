export type Profile = {
  /** The current display name of the actor.*/
  name: string;

  /** The current display status of the actor.*/
  status: string;

  /** A short description of the actor. */
  blurb: string;

  /** A full description of the actor, with custom formatting allowed. */
  body: string;
};

export default Profile;