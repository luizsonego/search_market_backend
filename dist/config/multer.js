"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: path_1.default.join(__dirname, '..', '..', 'uploads'),
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }),
    limits: {
        fileSize: 4 * 1024 * 1024 // 4MB
    },
    fileFilter: function (req, file, cb) {
        var mimeTypes = ['image/jpeg', 'image/png'];
        if (!mimeTypes.includes(file.mimetype)) {
            return cb(null, false);
        }
        cb(null, true);
    }
};
