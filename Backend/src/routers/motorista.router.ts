import express from 'express';
import { loginMotorista, obtenerMotoristas, obtenerPedidos, registrarMotorista } from '../controllers/motorista.controller';


const router = express.Router();

router.post('/login',loginMotorista) //Cheqye

router.post('/registo',registrarMotorista)

//Obtener todos los motoristas
router.get('/',obtenerMotoristas) //Chque

router.get('/:id/pedidos',obtenerPedidos)



export default router;