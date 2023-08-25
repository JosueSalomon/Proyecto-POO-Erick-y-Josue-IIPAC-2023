import express from 'express';
import { crarNuevoProducto, crearEmpresa, loginAdmin } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login',loginAdmin)

router.post('/nuevaEmpresa',crearEmpresa)

router.post('/:id/nuevoProducto',crarNuevoProducto)

export default router;