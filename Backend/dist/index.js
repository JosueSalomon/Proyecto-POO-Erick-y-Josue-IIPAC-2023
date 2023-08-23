"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./utils/database");
//import usuarioRouter from './routers/usuario.router'
dotenv_1.default.config();
const database = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//app.use('/usuarios',usuarioRouter);
app.get('/', (req, res) => {
    res.send('Servidor hola, raiz');
});
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
