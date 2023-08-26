import express from 'express';
import { actualizarLibro, borrarEmpresa,  borrarLibroDeEmpresa,  crarNuevoProducto, crearEmpresa, loginAdmin, motoristaAprobar } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login',loginAdmin)

router.post('/nuevaEmpresa',crearEmpresa)

router.post('/:id/nuevoProducto',crarNuevoProducto)

router.delete('/:id/borrarEmpresa',borrarEmpresa)

router.put('/:id/borrarLibroDeEmpresa',borrarLibroDeEmpresa)

router.put('/:id/libroActualizarEmpresa',actualizarLibro)

router.put('/:id/motoristaAprobar',motoristaAprobar)

export default router;