import express from 'express';
import { agregarPedidoEntregado, agregarPedidoMotorista, nuevoPedido, obtenerpedidos } from '../controllers/pedido.controller';


const router = express.Router();

router.get('/',obtenerpedidos)

router.post('/nuevoPedido',nuevoPedido)

router.delete('/:id/pedidoAgregadoMotorista',agregarPedidoMotorista)

router.put('/:id/pedidoEntregadoMotorista',agregarPedidoEntregado)

export default router;