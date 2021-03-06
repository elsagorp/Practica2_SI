/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
import morgan from 'morgan';

const routes = express.Router();
/** Logging */
routes.use(morgan('dev'));
/** Parse the request */
routes.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
routes.use(express.json());

routes.get('/character', controller.getCharacters);
routes.get('/character/:id', controller.getCharacter);
routes.put('/switchstatus/:id', controller.switchstatus);
routes.delete('/delete/:id', controller.deleteCharacter);


export = routes;