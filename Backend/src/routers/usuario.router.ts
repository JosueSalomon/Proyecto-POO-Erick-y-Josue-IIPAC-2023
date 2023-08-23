import express from 'express';
import { login, obtenerUsuario, obtenerUsuarios } from '../controllers/usuario.controller';


const router = express.Router();

router.post('/login',login) //Cheqye


//Obtener todos los usuairos
router.get('/',obtenerUsuarios) //Chque


// (collection usuarios) get usuario actual
router.get('/:id',obtenerUsuario) //si da



export default router;