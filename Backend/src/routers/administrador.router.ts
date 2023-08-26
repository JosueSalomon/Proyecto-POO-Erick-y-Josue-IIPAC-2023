import express from 'express';
import { actualizarLibro, borrarEmpresa,  crarNuevoProducto, crearEmpresa, loginAdmin } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login',loginAdmin)

router.post('/nuevaEmpresa',crearEmpresa)

router.put('/:id/nuevoProducto',crarNuevoProducto)

router.delete('/:id/borrarEmpresa',borrarEmpresa)

//router.delete('/:id/borrarLibroDeEmpresa',borrarLibroDeEmpresa)

router.put('/:id/libroActualizar',actualizarLibro)

export default router;