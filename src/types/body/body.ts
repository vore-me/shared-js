import BodyPart from "./part";

/**
 * Used as both the root body part and container for all other body parts.
 */
export namespace Body {
  export type Part = BodyPart;
}

export type Body
  = Body.Part
  & {
    parts: Body.Part[];
  }

export default Body;