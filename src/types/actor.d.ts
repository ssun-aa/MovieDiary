export interface IActorItem {
  adult: boolean;
  gender: number;
  id: number;
  known_for: Array;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IActorAPIRes {
  results: Array<IActorItem>;
}
