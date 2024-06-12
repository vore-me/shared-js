import Participant from "./stories/participant";

export type Contract = {
  key: string;
  actors: Set<Participant>;
};
