import express from 'express';
import { loginMotorista, obtenerMotoristas, registrarMotorista } from '../controllers/motorista.controller';


const router = express.Router();

router.post('/login',loginMotorista) //Cheqye

router.post('/registo',registrarMotorista)

//Obtener todos los motoristas
router.get('/',obtenerMotoristas) //Chque

export default router;