import { Action } from "./actions";
import Actor from "./actor";
import { Contract } from "./contracts/contract";

export class Story {
  title: string;
  key: string;
  contract: Contract;
  actions: Action[];

  get actors(): Set<Actor> {
    return this.contract.players;
  }
}