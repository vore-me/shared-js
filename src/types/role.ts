/**
 * The Role of an Actor in a Vore Scenerio.
 */
export enum Role {
  None = 0,
  Prey = 1,
  Pred = 2,
  Switch = Pred | Prey,
  Any = null,
}

export default Role;