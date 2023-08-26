import { Request, Response } from "express";
import mongoose from "mongoose";
import { PedidosSchema } from "../models/pedidos.schema";
import { MotoristaSchema } from "../models/motoristas.schema";

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


export const agregarPedidoMotorista = (req: Request, res: Response) => {
    const motoristaID = req.params.id;
    const { _id: pedidoID } = req.body;

    PedidosSchema.findByIdAndDelete(pedidoID)
        .then(pedido => {
            if (!pedido) {
                return res.status(404).send({ message: 'Pedido no encontrado' });
            }

            const { nombreCliente, direccion, precio, telefono,fecha} = pedido;

            MotoristaSchema.updateOne(
                { _id: motoristaID },
                {
                    $push: {
                        pedidos: {
                            _id: new mongoose.Types.ObjectId(pedidoID),
                            nombreCliente,
                            direccion,
                            precio,
                            telefono,
                            fecha
                        }
                    }
                }
            )
            .then(result =>{
                res.send({ message: 'Agregado al pedido del motorista', result });
                res.end();
            })
            .catch(error => {
                res.send({ message: 'Ocurrio un error para agregar al motorista', error });
                res.end();
            })
        })
        .catch(error => {
            res.send({ message: 'Ocurrió un error al obtener el pedido', error });
            res.end();
        });
};

export const agregarPedidoEntregado = async (req: Request, res: Response) => {
    const motoristaID = req.params.id;
    const pedidoID = req.body._id; // Cambio en cómo se obtiene el _id del pedido

    try {
        const motorista = await MotoristaSchema.findById(motoristaID);

        if (!motorista) {
            return res.status(404).json({ message: 'Motorista no encontrado' });
        }

        const pedidoIndex = motorista.pedidos.findIndex(pedido => pedido._id.toString() === pedidoID);
        console.log(pedidoIndex)
        if (pedidoIndex === -1) {
            return res.status(404).json({ message: 'Pedido no encontrado en la lista de pedidos del motorista' });
        }

        const pedidoEntregado = motorista.pedidos.splice(pedidoIndex, 1)[0];
        motorista.pedidosEntregados.push(pedidoEntregado);

        await motorista.save();

        return res.status(200).json({ message: 'Pedido agregado a pedidosEntregados' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
};