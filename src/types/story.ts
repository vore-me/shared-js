import { Action } from "./actions";
import { Contract } from "./contracts/contract";

export class Story {
  title: string;
  key: string;
  contract: Contract;
  actions: Action[];
}