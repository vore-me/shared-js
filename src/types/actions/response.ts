/**
 * Possible responses to an Action
 */
export enum ActionResponse {
  DENY,
  ACCEPT,
  /** Roll a dice to determine the outcome */
  ROLL
}

export default ActionResponse;