import express from 'express';
import { actualizarLibro, borrarEmpresa, borrarLibro, crarNuevoProducto, crearEmpresa, loginAdmin } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login',loginAdmin)

router.post('/nuevaEmpresa',crearEmpresa)

router.post('/:id/nuevoProducto',crarNuevoProducto)

router.delete('/:id/borrarEmpresa',borrarEmpresa)

router.delete('/:id/borrarLibro',borrarLibro)

router.put('/:id/libroActualizar',actualizarLibro)

export default router;