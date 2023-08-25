import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Database } from './utils/database';

import administradorRouter from './routers/administrador.router'
import empresaRouter from './routers/empresa.router'
import libroRouter from './routers/libro.router'
import motoristaRouter from './routers/motorista.router'
import pedidoRouter from './routers/pedido.router'
import usuarioRouter from './routers/usuario.router'



dotenv.config();
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/administrador',administradorRouter)
app.use('/empresa',empresaRouter)
app.use('/libro',libroRouter)
app.use('/motorista',motoristaRouter)
app.use('/pedido',pedidoRouter)
app.use('/usuarios',usuarioRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Servidor raiz, hola');
    });

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});