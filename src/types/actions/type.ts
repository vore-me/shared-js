import Role from "../role";

/**
 * A type of Vore Action.
 * - These typings help dictate the events and flow of a Vore Story.
 */
export class ActionType<
  TKey extends string = string,
  TActors extends Role = Role.Any,
  TTargets extends Role = Role.Any,
> {
  constructor(
    readonly Key: TKey,
    readonly Actors: TActors = (Role.Any as TActors),
    readonly Targets: TTargets = (Role.Any as TTargets),
  ) { Object.freeze(this); }
}

export default ActionType;