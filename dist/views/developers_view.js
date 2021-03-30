"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render: function (developer) {
        return {
            id: developer.id,
            name: developer.name,
            gender: developer.gender,
            age: developer.age,
            hobby: developer.hobby,
            birth: developer.birth
        };
    },
    renderMany: function (developers) {
        var _this = this;
        return developers.map(function (developers) { return _this.render(developers); });
    }
};
