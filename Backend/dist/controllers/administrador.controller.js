"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.motoristaAprobar = exports.actualizarLibro = exports.borrarLibroDeEmpresa = exports.borrarEmpresa = exports.crarNuevoProducto = exports.crearEmpresa = exports.loginAdmin = void 0;
const administradores_schema_1 = require("../models/administradores.schema");
const empresas_schema_1 = require("../models/empresas.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const motoristas_schema_1 = require("../models/motoristas.schema");
const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield administradores_schema_1.AdministradorSchema.findOne({ correo: req.body.correo, contresana: req.body.contresana }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginAdmin = loginAdmin;
const crearEmpresa = (req, res) => {
    const empresaNueva = new empresas_schema_1.EmpresaSchema(req.body);
    empresaNueva.save().then((empresaNueva) => {
        res.send({ message: 'Se agrego la nueva empresa', empresaNueva });
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar la empresa', error });
        res.end();
    });
};
exports.crearEmpresa = crearEmpresa;
//
const crarNuevoProducto = (req, res) => {
    empresas_schema_1.EmpresaSchema.updateOne({ _id: req.params.id }, {
        $push: {
            Libros: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                nombre: req.body.nombre,
                imagen: req.body.imagen,
                precio: req.body.precio,
                categoria: req.body.categoria,
                descripcion: req.body.descripcion
            }
        }
    }).then(result => {
        res.send({ message: 'Libro agregado a la empresa', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.crarNuevoProducto = crarNuevoProducto;
//
const borrarEmpresa = (req, res) => {
    empresas_schema_1.EmpresaSchema.deleteOne({ _id: req.params.id })
        .then((removeResult) => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    });
};
exports.borrarEmpresa = borrarEmpresa;
const borrarLibroDeEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresaId = req.params.id; // Obtén el _id de la empresa de los parámetros de la URL
    const libroId = req.body._id; // Obtén el _id del libro a eliminar del cuerpo de la solicitud
    try {
        const empresa = yield empresas_schema_1.EmpresaSchema.findById(empresaId);
        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrado' });
        }
        const libroIndex = empresa.Libros.findIndex(libro => libro._id.toString() === libroId);
        console.log(libroIndex);
        if (libroIndex === -1) {
            return res.status(404).json({ message: 'libro no encontrado en la lista de libros de la empresa' });
        }
        const LibroBorrado = empresa.Libros.splice(libroIndex, 1)[0];
        yield empresa.save();
        return res.status(200).json({ message: 'Libro borrado con exito ' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
});
exports.borrarLibroDeEmpresa = borrarLibroDeEmpresa;
const actualizarLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresaId = req.params.id; // Obtén el _id de la empresa de los parámetros de la URL
    const libroId = req.body._id; // Obtén el _id del libro a actualizar del cuerpo de la solicitud
    try {
        const empresa = yield empresas_schema_1.EmpresaSchema.findById(empresaId);
        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }
        const libroToUpdate = empresa.Libros.find(libro => libro._id.toString() === libroId);
        console.log(libroToUpdate);
        if (!libroToUpdate) {
            return res.status(404).json({ message: 'Libro no encontrado en la lista de libros de la empresa' });
        }
        // Actualizar los campos del libro
        libroToUpdate.nombre = req.body.nombre;
        libroToUpdate.imagen = req.body.imagen;
        libroToUpdate.precio = req.body.precio;
        libroToUpdate.categoria = req.body.categoria;
        libroToUpdate.descripcion = req.body.descripcion;
        empresa.markModified('Libros');
        yield empresa.save();
        ;
        console.log("la empresa", empresa);
        return res.status(200).json({ message: 'Libro actualizado con éxito' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
});
exports.actualizarLibro = actualizarLibro;
const motoristaAprobar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motoristaId = req.params.id;
        // Verifica si el motorista existe antes de realizar la actualización
        const motorista = yield motoristas_schema_1.MotoristaSchema.findOne({ _id: motoristaId });
        if (!motorista) {
            return res.status(404).send({ status: false, message: "Motorista no encontrado" });
        }
        // Cambia el estado de false a true
        motorista.estado = true;
        yield motorista.save();
        res.status(200).send({ status: true, message: "Estado del motorista cambiado a true con éxito" });
    }
    catch (error) {
        res.status(500).send({ status: false, message: "Error al cambiar el estado del motorista", error });
    }
});
exports.motoristaAprobar = motoristaAprobar;
