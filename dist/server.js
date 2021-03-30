"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
require("./database/connection");
var handler_1 = __importDefault(require("./errors/handler"));
var port = process.env.PORT || 3001;
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(handler_1.default);
app.use(routes_1.default);
app.listen(port, function () {
    console.log("Server is running in " + port);
});
