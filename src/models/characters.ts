import { Schema, model } from 'mongoose';
import { ObjectId } from "mongodb";
import { EpisodeAPI } from '../types';
import { Interface } from 'readline';

export default class Character {
    constructor(
         public id: number
         ,public name: string, public status: string, public species: string, public episode: [EpisodeAPI], private _id?: ObjectId) {}
}
/*
export interface ICharacter extends Document {
  id: string;
  name: string;
  status: string;
  species: string;
  episode: [string];
};
const charactSchema = new Schema(
  {

    id: {
        type: String,
        require: true,
        unique: true,
      },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    status: {
        type: String,
        require: true,
        unique: true,
      },
    species: {
      type: String,
      require: true,
    },
    episode: {
        type: Array,
        require: true,
      },
  }
);

export default model<ICharacter>('Character', charactSchema);
*/