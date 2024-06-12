import Actor from '../actor';

export type Participant
  = Actor
  & {
    story: string;
    role: string;
  }

export default Participant;