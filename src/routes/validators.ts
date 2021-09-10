import { body } from 'express-validator/check';

export const loginValidators = [
  body('email').isEmail().withMessage('Введите правильный e-mail')
]

export const signUpValidators = [
  body('email').isEmail().withMessage('Введите правильный e-mail'),
  body('pass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
  body('name').isLength({min: 2}).withMessage('Длина имени должна быть не менее 2 символов')
]

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
