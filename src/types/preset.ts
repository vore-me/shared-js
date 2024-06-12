export type Preset<T = unknown> = {
  key: string;
  name: string;
  desc: string;
  data: T;
};

export default Preset;