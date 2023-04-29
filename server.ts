import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app: express.Application = express();

dotenv.config({
    path: './.env'
});

const hostName: string | undefined = process.env.HOST;
const port: string | Number = process.env.PORT || 7070;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.json("hiiiiii");
});

if (hostName && port) {
    app.listen(Number(port), hostName, () => {
        console.log(`server start at http://${hostName}:${port}`);
    })
}
