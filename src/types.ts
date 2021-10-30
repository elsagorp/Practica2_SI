import { ObjectId } from "bson";

export type CharacterAPI = {
    id: number;
    name: string;
    status: string;
    species: string;
    episode: [EpisodeAPI];
    _id?: ObjectId;
  };
  
  export type EpisodeAPI = {
    name: string;
    episode: string;
  };
  
  export type Character = Omit<CharacterAPI, "episode"> & {
    episode: Array<EpisodeAPI>;
  };
  export type Episode = EpisodeAPI;