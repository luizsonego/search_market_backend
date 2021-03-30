"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Yup = __importStar(require("yup"));
var Developers_1 = __importDefault(require("../entity/Developers"));
var developers_view_1 = __importDefault(require("../views/developers_view"));
exports.default = {
    create: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, gender, age, hobby, birth, developersRepository, data, schema, developer, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = request.body, name_1 = _a.name, gender = _a.gender, age = _a.age, hobby = _a.hobby, birth = _a.birth;
                        developersRepository = typeorm_1.getRepository(Developers_1.default);
                        data = {
                            name: name_1,
                            gender: gender,
                            age: age,
                            hobby: hobby,
                            birth: birth
                        };
                        schema = Yup.object().shape({
                            name: Yup.string().required(),
                            gender: Yup.string().required(),
                            age: Yup.number().required(),
                            hobby: Yup.string().required(),
                            birth: Yup.string().required()
                        });
                        return [4 /*yield*/, schema.validate(data, {
                                abortEarly: false
                            })];
                    case 1:
                        _b.sent();
                        developer = developersRepository.create(data);
                        return [4 /*yield*/, developersRepository.save(developer)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json({ developer: developer })];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(400).json(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    index: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var developerRepository, _a, perPage, page, params, realPage, realTake, findOptions, getQuery, queryParams, developers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        developerRepository = typeorm_1.getRepository(Developers_1.default);
                        _a = request.query, perPage = _a.perPage, page = _a.page, params = __rest(_a, ["perPage", "page"]);
                        if (perPage)
                            realTake = +perPage;
                        else {
                            perPage = '10';
                            realTake = 10;
                        }
                        if (page)
                            realPage = +page === 1 ? 0 : (+page - 1) * realTake;
                        else {
                            realPage = 0;
                            page = '1';
                        }
                        findOptions = {
                            take: realTake,
                            skip: realPage,
                            where: __assign({}, params)
                        };
                        // @ts-expect-error
                        if (!params)
                            delete findOptions.where;
                        getQuery = function () { return Object.keys(params).map(function (key) { return key + "=" + params[key]; }).join('&'); };
                        queryParams = getQuery().length === 0 ? '' : "&" + getQuery();
                        return [4 /*yield*/, developerRepository.find(findOptions)];
                    case 1:
                        developers = _b.sent();
                        return [2 /*return*/, response.json({
                                data: developers_view_1.default.renderMany(developers),
                                perPage: realTake,
                                page: +page || 1,
                                next: "developers?perPage=" + realTake + "&page=" + (+page + 1) + queryParams,
                                prev: "developers?perPage=" + realTake + "&page=" + (+page - 1) + queryParams
                            })];
                }
            });
        });
    },
    show: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, developerRepository, developer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        developerRepository = typeorm_1.getRepository(Developers_1.default);
                        return [4 /*yield*/, developerRepository.findOneOrFail(id)];
                    case 1:
                        developer = _a.sent();
                        return [2 /*return*/, response.status(200).json(developers_view_1.default.render(developer))];
                }
            });
        });
    },
    update: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, gender, age, hobby, birth, developersRepository, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, gender = _a.gender, age = _a.age, hobby = _a.hobby, birth = _a.birth;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        developersRepository = typeorm_1.getRepository(Developers_1.default);
                        return [4 /*yield*/, developersRepository.update({ id: parseInt(id) }, { name: name, gender: gender, age: age, hobby: hobby, birth: birth }).then(function (resp) {
                                return response.status(200).json({ name: name, gender: gender, age: age, hobby: hobby, birth: birth });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.status(400).json({ message: error_2 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};
