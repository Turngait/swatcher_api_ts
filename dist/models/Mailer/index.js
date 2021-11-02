"use strict";
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
exports.__esModule = true;
var mail_1 = __importDefault(require("@sendgrid/mail"));
var api_1 = require("../../config/api");
mail_1["default"].setApiKey(api_1.MAIL_API_KEY);
var Mailer = /** @class */ (function () {
    function Mailer() {
    }
    Mailer.sendSignUpMail = function (mail, pass, name) {
        var msg = {
            to: mail,
            from: 'SelfWatcher<info@fraktur.ru>',
            subject: 'Вы зарагестрировались на сайте SelfWatcher',
            text: 'Приветствуем, ' + name + '. Вы только что зарегестрировались на сайте SelfWatcher. Ваш пароль: ' + pass,
            html: "<div style=\"color: #4F4F4F\">\n        <h2 style=\"font-size: 1.4rem;\">\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C, " + name + "</h2>\n        <hr>\n        <p>\n          \u0412\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435\n          <a style=\"color: #4F4F4F\" href=\"http://pick-me-up.ru/\">SelfWatcher</a>\n        </p>\n        <p>\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C: <span style=\"font-size:1.2rem;font-weight: 800;\">" + pass + "</span></p>\n      </div>"
        };
        mail_1["default"]
            .send(msg)
            .then(function () {
            console.log('Email sent');
        })["catch"](function (error) {
            console.error(error);
            console.error(error.response.body);
        });
    };
    Mailer.sendRecoveryMail = function (mail, value) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = {
                            to: mail,
                            from: 'SelfWatcher<info@fraktur.ru>',
                            subject: 'Запрос на восстановление пароля на сайте SelfWatcher',
                            text: 'Приветствуем. Вы только что запросили сброс пароля на сайте SelfWatcher. Вам следует ввести данные цифры: ' + value,
                            html: "<div style=\"color: #4F4F4F\">\n        <h2 style=\"font-size: 1.4rem;\">\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C</h2>\n        <hr>\n        <p>\n          \u0412\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435\n          <a style=\"color: #4F4F4F\" href=\"http://pick-me-up.ru/\">SelfWatcher</a>\n        </p>\n        <p>\u0412\u0430\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0438\u0444\u0440\u044B: <span style=\"font-size:1.2rem;font-weight: 800;\">" + value + "</span></p>\n      </div>"
                        };
                        return [4 /*yield*/, mail_1["default"].send(msg).then(function () {
                                return true;
                            })["catch"](function (error) {
                                console.error(error);
                                console.error(error.response.body);
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mailer.sendPassWasChanged = function (mail, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = {
                            to: mail,
                            from: 'SelfWatcher<info@fraktur.ru>',
                            subject: 'Запрос на восстановление пароля на сайте SelfWatcher',
                            text: 'Приветствуем. Вы только что изменили пароль на сайте SelfWatcher. Ваш новый пароль: ' + pass,
                            html: "<div style=\"color: #4F4F4F\">\n        <h2 style=\"font-size: 1.4rem;\">\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C</h2>\n        <hr>\n        <p>\n          \u0412\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435\n          <a style=\"color: #4F4F4F\" href=\"http://pick-me-up.ru/\">SelfWatcher</a>\n        </p>\n        <p>\u0412\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C: <span style=\"font-size:1.2rem;font-weight: 800;\">" + pass + "</span></p>\n      </div>"
                        };
                        return [4 /*yield*/, mail_1["default"].send(msg).then(function () {
                                return true;
                            })["catch"](function (error) {
                                console.error(error);
                                console.error(error.response.body);
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Mailer;
}());
exports["default"] = Mailer;
//# sourceMappingURL=index.js.map