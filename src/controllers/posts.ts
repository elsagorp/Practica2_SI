/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { collections } from "../mongo/mongoconnect";
import {  CharacterAPI } from '../types';




// getting characters
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const charact = (await collections.characters.find({}).toArray()) as CharacterAPI[];
 
        return res.status(200).json({
            status: 200,
            body: charact});
     } catch (error) {
         res.status(500).send({body: 'NOT FOUND'});
     }


};

// getting a single character
const getPost = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const chart = (await collections.characters.findOne({id: Number(req.params.id)})) as CharacterAPI;
        return res.status(200).json({
            Status: 200,
            Body: chart
        });


    } catch (error) {
        return res.status(404).json({Status: 404,
            Body: "Not Found"
        });
    }


};

// updating the status of a character
const switchstatus = async (req: Request, res: Response, next: NextFunction) => {

        const charact = (await collections.characters.findOne({id: Number(req.params.id)})) as CharacterAPI;
        if(charact.status = "Alive"){
          (await collections.characters?.updateOne(charact, { $set: {status: "Dead"} }));


        }else if(charact.status = "Dead"){
          (await collections.characters?.updateOne({id: charact.id}, { $set: {status: "Alive"} }));
        }
            return res.status(200).send({
                Body: charact
            })
         




};

// deleting a character
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
        const charact = (await collections.characters.deleteOne({id: Number(req.params.id)}, (err: any) => {
            if (err) {
            res.status(404).json(
                {status: 404,
                Body: "Error not found"});
            } else {
            res.status(200).send( {status: 200,
                Body: "OK"});
            }
     }));

};



export default { getCharacters: getPosts, getCharacter: getPost, switchstatus, deleteCharacter: deletePost};