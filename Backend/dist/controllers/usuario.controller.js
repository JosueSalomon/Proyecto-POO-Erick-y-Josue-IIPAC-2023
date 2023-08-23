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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUsuario = exports.obtenerUsuarios = exports.login = void 0;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Haciendo pruebas de login, solo con mensaje ");
    res.end();
    //Se va poner cuando tengamos un schema
    // const usuario = await UsuarioSchema.findOne({nombre: req.body.usuario, contrasena: req.body.contrasena}, {contrasena: false});
    // if (usuario) {
    // res.send({status: true, message: 'Login correcto', usuario});
    // }
    // else 
    // res.send({status: false, message: 'Login incorrecto'});
    // res.end();
});
exports.login = login;
const obtenerUsuarios = (req, res) => {
    res.send("Obteniendo todos los usuarios ");
    res.end();
    // UsuarioSchema.find()
    // .then(resultado=>{
    //     res.send({status:true,message:"Usuarios encontrados",resultado});
    //     res.end();
    // })
    // .catch(error=>{
    //     res.send({status:false,message:"No se encontraron usarios",error})
    // })
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = (req, res) => {
    res.send("Este es el usuario ");
    // UsuarioSchema.findOne({_id:new mongoose.Types.ObjectId(req.params.id)})
    // .then(resultado=>{
    //     res.send({status:true,message:"Usuario encontrado",resultado});
    //     res.end();
    // })
    // .catch(error=>{
    //     res.send({status:false,message:"No se encontraro el usario",error});
    //     res.end();
    // })
};
exports.obtenerUsuario = obtenerUsuario;
