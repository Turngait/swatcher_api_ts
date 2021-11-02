"use strict";
exports.__esModule = true;
exports.restorePassValidator = exports.changeUserPassValidator = exports.changeUserNameValidator = exports.saveUserDataValidators = exports.signUpValidators = exports.loginValidators = void 0;
var check_1 = require("express-validator/check");
exports.loginValidators = [
    check_1.body('email').isEmail().withMessage('Введите правильный e-mail')
];
exports.signUpValidators = [
    check_1.body('email').isEmail().withMessage('Введите правильный e-mail'),
    check_1.body('pass').isLength({ min: 5 }).withMessage('Длина пароля должна быть не менее 5-ти символов'),
    check_1.body('name').isLength({ min: 2 }).withMessage('Длина имени должна быть не менее 2 символов')
];
exports.saveUserDataValidators = [
    check_1.body('sex').isIn(['woman', 'man']).withMessage('Укажите правильный пол'),
    check_1.body('age').isNumeric().withMessage('Введите верный возраст'),
    check_1.body('weight').isNumeric().withMessage('Введите верный вес'),
    check_1.body('height').isNumeric().withMessage('Введите правильный рост'),
    check_1.body('token').not().isEmpty().withMessage('Необходим токен'),
];
exports.changeUserNameValidator = [
    check_1.body('name').isLength({ min: 2 }).withMessage('Длина имени должна быть не менее 3 символов')
];
exports.changeUserPassValidator = [
    check_1.body('pass').isLength({ min: 5 }).withMessage('Длина пароля должна быть не менее 5-ти символов')
];
exports.restorePassValidator = [
    // body('pass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
    check_1.body('email').isEmail().withMessage('Введите правильный e-mail')
];
// export const addGroupValidators = [
//   body('groupTitle').isLength({min: 3}).withMessage('Длина названия должна быть не меенее 3х символов')
// ]
// exports.addWlistItemValidators = [
//   body('wlist.name').isLength({min: 2}).withMessage('Длина названия должна быть не меенее 2х символов'),
//   body('wlist.price').isNumeric().withMessage('Сумма должна быть числом'),
//   body('wlist.price').isLength({min: 1}).withMessage('Длина суммы должна быть не менее 1 символа'),
//   body('wlist.priority').isNumeric().withMessage('Сумма должна быть числом'),
// ]
// exports.addGroupValidators = [
//   body('newGroup').isLength({min: 3}).withMessage('Длина названия должна быть не меенее 3х символов'),
// ]
// exports.editWlistItemValidators = [
//   body('wlist.name').isLength({min: 2}).withMessage('Длина названия должна быть не меенее 2х символов'),
//   body('wlist.price').isNumeric().withMessage('Сумма должна быть числом'),
//   body('wlist.price').isLength({min: 1}).withMessage('Длина суммы должна быть не менее 1 символа'),
//   body('wlist.priority').isNumeric().withMessage('Сумма должна быть числом'),
// ]
// exports.changeNameValidators = [
//   body('name').isLength({min: 2}).withMessage('Длина названия должна быть не меенее 2х символов'),
// ]
// exports.changePassValidators = [
//   body('oldPass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
//   body('newPass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
// ]
// exports.recoverValidators = [
//   body('email').isEmail().withMessage('Введите правильный e-mail'),
// ]
// exports.recoverSetPassValidators = [
//   body('pass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
// ]
//# sourceMappingURL=validators.js.map