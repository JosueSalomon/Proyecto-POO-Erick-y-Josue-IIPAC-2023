import express from 'express';
import { nuevoPedido, obtenerpedidos } from '../controllers/pedido.controller';


const router = express.Router();

router.get('/',obtenerpedidos)

router.post('/nuevoPedido',nuevoPedido)

export default router;