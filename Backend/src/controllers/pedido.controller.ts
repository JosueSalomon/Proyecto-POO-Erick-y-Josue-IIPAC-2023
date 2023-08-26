import { Request, Response } from "express";
import mongoose from "mongoose";
import { PedidosSchema } from "../models/pedidos.schema";

export const nuevoPedido = (req: Request, res: Response) => {
    const pedidoNuevo = new PedidosSchema(req.body);
    pedidoNuevo.save().then((pedidoNuevo: any) => {
        res.send({ message: 'Se agrego el pedido con exito', pedidoNuevo });
        res.end();
    }).catch((error: any) => {
        res.send({ message: 'Hubo un error al guardar el pedido', error });
        res.end();
    })
}

export const obtenerpedidos = (req: Request, res: Response) => {
    PedidosSchema.find()
        .then(resultado => {
            res.send({ status: true, message: "Pedidos encontrados", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se encontraron pedidos", error })
        })
}