import express from 'express';
import { agregarPedidoMotorista, nuevoPedido, obtenerpedidos } from '../controllers/pedido.controller';


const router = express.Router();

router.get('/',obtenerpedidos)

router.post('/nuevoPedido',nuevoPedido)

router.delete('/:id/pedidoAgregadoMotorista',agregarPedidoMotorista)

export default router;