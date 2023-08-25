import express from 'express';
import { obtenerLibrosDeEmpresa } from '../controllers/empresa.controller';


const router = express.Router();

router.get('/:id/empresa',obtenerLibrosDeEmpresa) 
export default router;