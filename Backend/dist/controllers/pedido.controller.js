"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarPedidoMotorista = exports.obtenerpedidos = exports.nuevoPedido = void 0;
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
        const { nombreCliente, direccion, precio, telefono, estado, fecha } = pedido;
        motoristas_schema_1.MotoristaSchema.updateOne({ _id: motoristaID }, {
            $push: {
                pedidos: {
                    _id: new mongoose_1.default.Types.ObjectId(pedidoID),
                    nombreCliente,
                    direccion,
                    precio,
                    telefono,
                    estado,
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
