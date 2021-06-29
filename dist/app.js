"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.express = express_1.default();
        this.routes();
    }
    routes() {
        this.express.use(express_1.default.static('higharccode'));
        this.express.get('/highArc', (req, res) => {
            res.sendFile('views/index.html', { root: __dirname });
        });
        this.express.get('/bundle.js', (req, res) => {
            res.sendFile('./bundle.js', { root: __dirname });
        });
    }
}
exports.default = new App().express;
