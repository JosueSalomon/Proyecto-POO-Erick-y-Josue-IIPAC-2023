import express from 'express';
import { crearEmpresa, loginAdmin } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login',loginAdmin)

router.post('/nuevaEmpresa',crearEmpresa)

export default router;