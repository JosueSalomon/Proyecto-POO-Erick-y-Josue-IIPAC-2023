import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Database } from './utils/database';
import usuarioRouter from './routers/usuario.router'


dotenv.config();
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/usuarios',usuarioRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Servidor raiz, hola');
    });

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});