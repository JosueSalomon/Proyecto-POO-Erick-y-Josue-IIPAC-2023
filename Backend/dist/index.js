"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./utils/database");
const usuario_router_1 = __importDefault(require("./routers/usuario.router"));
const administrador_router_1 = __importDefault(require("./routers/administrador.router"));
dotenv_1.default.config();
const database = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/usuarios', usuario_router_1.default);
app.use('/administradores', administrador_router_1.default);
app.get('/', (req, res) => {
    res.send('Servidor raiz, hola');
});
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
