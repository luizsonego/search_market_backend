"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Market = /** @class */ (function () {
    function Market() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Market.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Market.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Market.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "about", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "sunday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "sunStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "sunEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "monday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "monStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "monEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "tuesday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "tueStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "tueEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "wednesday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "wedStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "wedEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "thursday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "thuStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "thuEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "friday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "friStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "friEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "saturday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "satStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Market.prototype, "satEnd", void 0);
    Market = __decorate([
        typeorm_1.Entity('Market')
    ], Market);
    return Market;
}());
exports.default = Market;
