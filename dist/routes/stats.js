"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var StatController_1 = __importDefault(require("../controllers/StatController"));
var middleware_1 = require("../middleware");
var router = express_1.Router();
router.post('/getstat', middleware_1.checkToken, StatController_1["default"].getStat);
router.post('/addfoodforday', middleware_1.checkToken, StatController_1["default"].addFoodForDay);
router.post('/addillnessforday', middleware_1.checkToken, StatController_1["default"].addIllnessForDay);
router["delete"]('/delfood', middleware_1.checkToken, StatController_1["default"].deleteFoodForDay);
router["delete"]('/deleteillness', middleware_1.checkToken, StatController_1["default"].deleteIllForDay);
exports["default"] = router;
//# sourceMappingURL=stats.js.map