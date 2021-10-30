import {MongoClient } from "mongodb";
import {connect} from "http2";

import * as mongoDB from "mongodb";
//import Character, {ICharacter} from '../models/characters';
import * as Mongoose from "mongoose";


export const collections: { characters: mongoDB.Collection } = {
  characters: Mongoose.Collection
}

export async function mongoconnect () {
    try{

        const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb+srv://elsa_gor:12345qwe@cluster0.qslm9.mongodb.net/RickyMortyDB?retryWrites=true&w=majority");        
        await client.connect();
            
        const db: mongoDB.Db = client.db("RickyMortyDB");
    
        const CharactCollection: mongoDB.Collection = db.collection("Personajes");
    
        collections.characters = CharactCollection;

         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${CharactCollection.collectionName}`);
   }catch (error) {
    console.log(error)
  };

}

/*
let database: Mongoose.Connection;
export const Mconnect = () => {  // add your own uri below
  const uri = "mongodb+srv://elsa_gor:12345qwe@cluster0.qslm9.mongodb.net/RickyMortyDB?retryWrites=true&w=majority";  



  database = Mongoose.connection;

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });  
  database.once("open", async () => {
    console.log("Connected to database");
  });  
  database.on("error", () => {
    
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {  
      if (!database) {
      return;
    }  
  Mongoose.disconnect();
};*/