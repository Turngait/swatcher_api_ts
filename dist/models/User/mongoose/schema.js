"use strict";
exports.__esModule = true;
var userSchema = {
    name: String,
    email: String,
    pass: String,
    paper: String,
    status: String,
    isBanned: Boolean,
    ips: Array,
    token: [String],
    data: {
        sex: String,
        age: Number,
        weight: Number,
        height: Number
    },
    settings: {
        lang: String,
        theme: String
    },
    onboarding: {
        firstTime: Boolean
    },
    createdAt: String
};
exports["default"] = userSchema;
//# sourceMappingURL=schema.js.map