import express from 'express';
import { agregarCarrito, loginUsuario, obtenerUsuario, obtenerUsuarios, registrarUsuario } from '../controllers/usuario.controller';


const router = express.Router();

router.post('/login',loginUsuario) //Cheqye

router.post('/registo',registrarUsuario)

//Obtener todos los usuairos
router.get('/',obtenerUsuarios) //Chque


// (collection usuarios) get usuario actual
router.get('/:id',obtenerUsuario) //si da

router.put('/:id/Usuario',agregarCarrito)

export default router;