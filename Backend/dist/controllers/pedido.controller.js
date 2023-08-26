"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerpedidos = exports.nuevoPedido = void 0;
const pedidos_schema_1 = require("../models/pedidos.schema");
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
