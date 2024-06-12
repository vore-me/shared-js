import Role from "../role";
import ActionType from "./type";

/**
 * A namespace for all the Types of Vore Actions.
 */
export namespace Actions {

  /**
   * Idling or doing the same as before.
   * - Can be paired with a message to make a generic reply without triggering any Story Events. 
   */
  export const Reply
    = new ActionType("REPLY");

  /**
   * Used to offer a new Vore Story 
   */
  export const Offer
    = new ActionType("OFFER");

  /**
   * Used to start a new Vore Story without asking first.
   */
  export const Start
    = new ActionType("START");

  /**
   * Used by a predator to try to Consume a prey or Render it unable to escape.
   */
  export const Capture
    = new ActionType(
      "CAPTURE",
      Role.Pred,
      Role.Prey,
    );

  /**
   * Used by a Pred to Digest, Melt, Churn, Weaken, Transform, or otherwise process a Prey contained within them.
   */
  export const Process
    = new ActionType(
      "PROCESS",
      Role.Pred,
      Role.Prey,
    );

  /**
   * Used by a predator to Absorb the Remains of a fully processed prey.
   */
  export const Absorb
    = new ActionType(
      "ABSORB",
      Role.Pred,
      Role.Prey,
    );

  /**
   * Used to give-in to Capture, Processing, and other Predatory Actions as a Prey; with no resistance.
   */
  export const Surrender
    = new ActionType(
      "SURRENDER",
      Role.Prey,
      Role.Pred,
    );

  /**
   * Used to resist Capture, Processing, and other Predatory Actions as a Prey.
   */
  export const Struggle
    = new ActionType(
      "STRUGGLE",
      Role.Prey,
      Role.Pred,
    );

  /**
   * Used by a Pred to Dispose of the Remains a Prey that has been Processed or Absorbed.
   */
  export const Dispose
    = new ActionType(
      "DISPOSE",
      Role.Pred,
      Role.Prey,
    );

  /**
   * Used by a Pred to Reform a Prey that has been Processed or Absorbed.
   * - Can specify the number of Stages
   * - Can speficy transforimtive alterations to the Prey
   */
  export const Reform
    = new ActionType(
      "REFORM",
      Role.Any,
      Role.Any,
    );

  /**
   * Used by a Pred to release a Prey Consumed prey
   * - Can specify the number of Stages; including 0 to allow the prey to do as they please.
   */
  export const Release
    = new ActionType(
      "RELEASE",
      Role.Pred,
      Role.Prey,
    );

  /**
   * Used by a Pred to Transfer a Prey to another Pred or Body Part, or by prey to try to move to a different predator Body Part.
   */
  export const Move
    = new ActionType(
      "MOVE",
      Role.Any,
      Role.Any,
    );

  /**
   * Used by a Consumed prey to escape or try to escape from a Pred or one of their Body Parts.
   */
  export const Escape
    = new ActionType(
      "ESCAPE",
      Role.Prey,
      Role.Pred,
    );

  /**
   * Used to pre-maturely end a Vore Story without a proper conclusion.
   * - An Emergency Exit
   */
  export const End
    = new ActionType("END");

  const ARRAY
    = Object.freeze([
      Reply,
      Offer,
      Start,
      Capture,
      Process,
      Absorb,
      Surrender,
      Struggle,
      Dispose,
      Reform,
      Release,
      Move,
      Escape,
      End,
    ] as const);

  const MAP
    = Object.freeze({
      [Reply.Key]: Reply,
      [Offer.Key]: Offer,
      [Start.Key]: Start,
      [Capture.Key]: Capture,
      [Process.Key]: Process,
      [Absorb.Key]: Absorb,
      [Surrender.Key]: Surrender,
      [Struggle.Key]: Struggle,
      [Dispose.Key]: Dispose,
      [Reform.Key]: Reform,
      [Release.Key]: Release,
      [Move.Key]: Move,
      [Escape.Key]: Escape,
      [End.Key]: End,
    } as const);

  /**
   * All the Types of Vore Actions.
   */
  export const Types
    = Object.freeze(
      Object.apply(
        ARRAY,
        MAP,
      )) as ({
        [Key in keyof typeof MAP]: typeof MAP[Key];
      } & {
        [Key in keyof typeof ARRAY]: typeof ARRAY[Key];
      } & {
        [Symbol.iterator]: () => IterableIterator<typeof ARRAY[number]>;
      });
}

export default Actions;