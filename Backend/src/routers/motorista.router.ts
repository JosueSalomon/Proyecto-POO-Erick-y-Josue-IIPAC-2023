import express from 'express';
import { loginMotorista, obtenerMotoristas, obtenerPedidos, obtenerPedidosEntregados, registrarMotorista } from '../controllers/motorista.controller';


const router = express.Router();

router.post('/login',loginMotorista) //Cheqye

router.post('/registo',registrarMotorista)

//Obtener todos los motoristas
router.get('/',obtenerMotoristas) //Chque

router.get('/:id/pedidos',obtenerPedidos)

router.get('/:id/pedidosEntregados',obtenerPedidosEntregados)



export default router;