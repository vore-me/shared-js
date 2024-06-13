import Player from "./player";

export type Contract
  = {
    key: string;
    players: Set<Player>;
  };
