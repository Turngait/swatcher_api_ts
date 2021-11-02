"use strict";
exports.__esModule = true;
var foodSchema = {
    userId: String,
    date: String,
    period: String,
    foods: [{
            food_id: String,
            description: String,
            amount: Number,
            time: String
        }],
    health: [{
            health_id: String,
            power: Number,
            begin: String,
            duration: String,
            description: String
        }],
    createdAt: String
};
exports["default"] = foodSchema;
//# sourceMappingURL=schema.js.map