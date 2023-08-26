import express from 'express';
import { nuevoPedido } from '../controllers/pedido.controller';


const router = express.Router();


router.post('/',nuevoPedido)

export default router;