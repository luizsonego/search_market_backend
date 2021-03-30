"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Yup = __importStar(require("yup"));
var Market_1 = __importDefault(require("../entity/Market"));
var market_view_1 = __importDefault(require("../views/market_view"));
exports.default = {
    create: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, latitude, longitude, about, sunday, sunStart, sunEnd, monday, monStart, monEnd, tuesday, tueStart, tueEnd, wednesday, wedStart, wedEnd, thursday, thuStart, thuEnd, friday, friStart, friEnd, saturday, satStart, satEnd, marketRepository, data, schema, market;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, latitude = _a.latitude, longitude = _a.longitude, about = _a.about, sunday = _a.sunday, sunStart = _a.sunStart, sunEnd = _a.sunEnd, monday = _a.monday, monStart = _a.monStart, monEnd = _a.monEnd, tuesday = _a.tuesday, tueStart = _a.tueStart, tueEnd = _a.tueEnd, wednesday = _a.wednesday, wedStart = _a.wedStart, wedEnd = _a.wedEnd, thursday = _a.thursday, thuStart = _a.thuStart, thuEnd = _a.thuEnd, friday = _a.friday, friStart = _a.friStart, friEnd = _a.friEnd, saturday = _a.saturday, satStart = _a.satStart, satEnd = _a.satEnd;
                        marketRepository = typeorm_1.getRepository(Market_1.default);
                        data = {
                            name: name,
                            latitude: latitude,
                            longitude: longitude,
                            about: about,
                            sunday: sunday,
                            sunStart: sunStart,
                            sunEnd: sunEnd,
                            monday: monday,
                            monStart: monStart,
                            monEnd: monEnd,
                            tuesday: tuesday,
                            tueStart: tueStart,
                            tueEnd: tueEnd,
                            wednesday: wednesday,
                            wedStart: wedStart,
                            wedEnd: wedEnd,
                            thursday: thursday,
                            thuStart: thuStart,
                            thuEnd: thuEnd,
                            friday: friday,
                            friStart: friStart,
                            friEnd: friEnd,
                            saturday: saturday,
                            satStart: satStart,
                            satEnd: satEnd
                        };
                        schema = Yup.object().shape({
                            name: Yup.string().required(),
                            latitude: Yup.number().required(),
                            longitude: Yup.number().required(),
                            about: Yup.string().required().max(300),
                            sunday: Yup.string(),
                            sunStart: Yup.string(),
                            sunEnd: Yup.string(),
                            monday: Yup.string(),
                            monStart: Yup.string(),
                            monEnd: Yup.string(),
                            tuesday: Yup.string(),
                            tueStart: Yup.string(),
                            tueEnd: Yup.string(),
                            wednesday: Yup.string(),
                            wedStart: Yup.string(),
                            wedEnd: Yup.string(),
                            thursday: Yup.string(),
                            thuStart: Yup.string(),
                            thuEnd: Yup.string(),
                            friday: Yup.string(),
                            friStart: Yup.string(),
                            friEnd: Yup.string(),
                            saturday: Yup.string(),
                            satStart: Yup.string(),
                            satEnd: Yup.string(),
                            images: Yup.array(Yup.object().shape({
                                path: Yup.string()
                            }))
                        });
                        return [4 /*yield*/, schema.validate(data, {
                                abortEarly: false
                            })];
                    case 1:
                        _b.sent();
                        market = marketRepository.create(data);
                        return [4 /*yield*/, marketRepository.save(market)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json(market)];
                }
            });
        });
    },
    index: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var marketRepository, market;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        marketRepository = typeorm_1.getRepository(Market_1.default);
                        return [4 /*yield*/, marketRepository.find()];
                    case 1:
                        market = _a.sent();
                        return [2 /*return*/, response.json(market_view_1.default.renderMany(market))];
                }
            });
        });
    },
    show: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, marketRepository, market;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        marketRepository = typeorm_1.getRepository(Market_1.default);
                        return [4 /*yield*/, marketRepository.findOneOrFail(id)];
                    case 1:
                        market = _a.sent();
                        return [2 /*return*/, response.json(market_view_1.default.render(market))];
                }
            });
        });
    }
};
