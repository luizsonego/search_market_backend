"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DevelopersController_1 = __importDefault(require("./controllers/DevelopersController"));
var MarketController_1 = __importDefault(require("./controllers/MarketController"));
var routes = express_1.Router();
routes.get('/developers', DevelopersController_1.default.index);
routes.get('/developers/:id', DevelopersController_1.default.show);
routes.put('/developers/:id', DevelopersController_1.default.update);
routes.post('/developers', DevelopersController_1.default.create);
routes.post('/market', MarketController_1.default.create);
routes.get('/market', MarketController_1.default.index);
routes.get('/market/:id', MarketController_1.default.show);
exports.default = routes;
