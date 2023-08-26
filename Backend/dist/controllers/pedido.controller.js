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
exports.agregarPedidoEntregado = exports.agregarPedidoMotorista = exports.obtenerpedidos = exports.nuevoPedido = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const pedidos_schema_1 = require("../models/pedidos.schema");
const motoristas_schema_1 = require("../models/motoristas.schema");
const nuevoPedido = (req, res) => {
    const pedidoNuevo = new pedidos_schema_1.PedidosSchema(req.body);
    pedidoNuevo.save().then((pedidoNuevo) => {
        res.send({ message: 'Se agrego el pedido con exito', pedidoNuevo });
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar el pedido', error });
        res.end();
    });
};
exports.nuevoPedido = nuevoPedido;
const obtenerpedidos = (req, res) => {
    pedidos_schema_1.PedidosSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "Pedidos encontrados", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron pedidos", error });
    });
};
exports.obtenerpedidos = obtenerpedidos;
const agregarPedidoMotorista = (req, res) => {
    const motoristaID = req.params.id;
    const { _id: pedidoID } = req.body;
    pedidos_schema_1.PedidosSchema.findByIdAndDelete(pedidoID)
        .then(pedido => {
        if (!pedido) {
            return res.status(404).send({ message: 'Pedido no encontrado' });
        }
        const { nombreCliente, direccion, precio, telefono, fecha } = pedido;
        motoristas_schema_1.MotoristaSchema.updateOne({ _id: motoristaID }, {
            $push: {
                pedidos: {
                    _id: new mongoose_1.default.Types.ObjectId(pedidoID),
                    nombreCliente,
                    direccion,
                    precio,
                    telefono,
                    fecha
                }
            }
        })
            .then(result => {
            res.send({ message: 'Agregado al pedido del motorista', result });
            res.end();
        })
            .catch(error => {
            res.send({ message: 'Ocurrio un error para agregar al motorista', error });
            res.end();
        });
    })
        .catch(error => {
        res.send({ message: 'Ocurrió un error al obtener el pedido', error });
        res.end();
    });
};
exports.agregarPedidoMotorista = agregarPedidoMotorista;
const agregarPedidoEntregado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motoristaID = req.params.id;
    const pedidoID = req.body._id; // Cambio en cómo se obtiene el _id del pedido
    try {
        const motorista = yield motoristas_schema_1.MotoristaSchema.findById(motoristaID);
        if (!motorista) {
            return res.status(404).json({ message: 'Motorista no encontrado' });
        }
        const pedidoIndex = motorista.pedidos.findIndex(pedido => pedido._id.toString() === pedidoID);
        console.log(pedidoIndex);
        if (pedidoIndex === -1) {
            return res.status(404).json({ message: 'Pedido no encontrado en la lista de pedidos del motorista' });
        }
        const pedidoEntregado = motorista.pedidos.splice(pedidoIndex, 1)[0];
        motorista.pedidosEntregados.push(pedidoEntregado);
        yield motorista.save();
        return res.status(200).json({ message: 'Pedido agregado a pedidosEntregados' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
});
exports.agregarPedidoEntregado = agregarPedidoEntregado;
