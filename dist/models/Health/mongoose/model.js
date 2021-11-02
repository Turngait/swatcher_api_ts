"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema_1 = __importDefault(require("./schema"));
exports["default"] = mongoose_1.model('Illness', new mongoose_1.Schema(schema_1["default"]), 'illnesses');
//# sourceMappingURL=model.js.map