import Actor from "../actor";
import ActionResponse from "./response";
import ActionType from "./type";
import { Actions } from "./types";

export class Action {
  constructor(
    public type: Action.Type,
    public actor: Actor,
    public target: Actor,
    public message?: string,
    public response?: Action.Response,
  ) { }
};

export namespace Action {
  export type Response
    = typeof ActionResponse;
  export const Response
    = ActionResponse;

  export type Type
    = typeof ActionType;
  export const Type
    = ActionType;

  export const Types
    = Actions.Types;
}