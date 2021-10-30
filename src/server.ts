/** source/server.ts */
import http from 'http';
import express, { Express } from 'express';
import routes from './routes/posts';
import {mongoconnect } from "./mongo/mongoconnect";

const app = express();


mongoconnect().then(() =>{
    /** Server */
        const httpServer = http.createServer(app);
        app.use("/", routes);
        const PORT: any = process.env.PORT ?? 6040;
        app.set('port', PORT);

        httpServer.listen(PORT, () => {
            console.log(`The server is running on port ${PORT}`);
            /*app.use((req, res) => {
                return res.status(200).send({
                    Status: 200,
                    Body: 'OKProgramacion-I'
                });
            });*/
        });
    }
).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});



/** RULES OF OUR API */
app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});










