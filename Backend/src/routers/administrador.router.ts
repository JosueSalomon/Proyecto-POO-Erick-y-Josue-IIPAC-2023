import express from 'express';
import { actualizarLibro, borrarEmpresa,  borrarLibroDeEmpresa,  crarNuevoProducto, crearEmpresa, loginAdmin, motoristaAprobar, motoristaDesAprobado, obtenerEmpresas, obtenerLibrosDeEmpresa } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login',loginAdmin)

router.get('/',obtenerEmpresas)

router.get('/:id/librosEmpresa',obtenerLibrosDeEmpresa)

router.post('/nuevaEmpresa',crearEmpresa)

router.post('/:id/nuevoProducto',crarNuevoProducto)

router.delete('/:id/borrarEmpresa',borrarEmpresa)

router.put('/:id/borrarLibroDeEmpresa',borrarLibroDeEmpresa)

router.put('/:id/libroActualizarEmpresa',actualizarLibro)

router.put('/:id/motoristaAprobar',motoristaAprobar)

router.put('/:id/motoristaDesAprobar',motoristaDesAprobado)

export default router;