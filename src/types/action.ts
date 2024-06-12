import Actor from "./actor";

export type Action = {
  type: Action.Type;
  actor: Actor;
  target: Actor;
  message?: string;
  response?: Response;
};

/**
 * Possible responses to an Action
 */
export enum Response {
  DENY,
  ACCEPT,
  ROLL,
}

export namespace Action {
  export const Type = Object.freeze({
    /**
     * Idling or doing the same as before.
     * - Can be paired with a message to make a generic reply without triggering any Story Events. 
     */
    REPLY: "REPLY",

    /** 
     * Used to offer a new Vore Story 
     */
    OFFER: "OFFER",

    /** 
     * Used to start a new Vore Story without asking first.
     */
    START: "OFFER",

    /**
     * Used by a predator to try to Consume a prey or Render it unable to escape.
     */
    CAPTURE: "CAPTURE",

    /** 
     * Used by a Pred to Digest, Melt, Churn, Weaken, Transform, or otherwise process a Prey contained within them.
     */
    PROCESS: "PROCESS",

    /**
     * Used by a predator to Absorb the Remains of a fully processed prey.
     */
    ABSORB: "ABSORB",

    /**
     * Used to give-in to Capture, Processing, and other Predatory Actions as a Prey; with no resistance.
     */
    SURRENDER: "SURRENDER",

    /**
     * Used to resist Capture, Processing, and other Predatory Actions as a Prey.
     */
    STRUGGLE: "STRUGGLE",

    /**
     * Used by a Pred to Dispose of the Remains a Prey that has been Processed or Absorbed.
     */
    DISPOSE: "DISPOSE",

    /**
     * Used by a Pred to Reform a Prey that has been Processed or Absorbed.
     * - Can specify the number of Stages
     * - Can speficy transforimtive alterations to the Prey
     */
    REFORM: "REFORM",

    /**
     * Used by a Pred to release a Prey Consumed prey
     * - Can specify the number of Stages; including 0 to allow the prey to do as they please.
     */
    RELEASE: "RELEASE",

    /**
     * Used by a Pred to Transfer a Prey to another Pred or Body Part.
     */
    MOVE: "MOVE",

    /**
     * Used by a Consumed prey to escape or try to escape from a Pred or one of their Body Parts.
     */
    ESCAPE: "ESCAPE",

    /**
     * Used to pre-maturely end a Vore Story without a proper conclusion.
     * - An Emergency Exit
     */
    END: "END"
  } as const);

  export type Type
    = typeof Type[keyof typeof Type];
}