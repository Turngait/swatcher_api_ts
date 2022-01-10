import { body } from 'express-validator/check';

export const loginValidators = [
  body('email').isEmail().withMessage('Введите правильный e-mail')
]

export const signUpValidators = [
  body('email').isEmail().withMessage('Введите правильный e-mail'),
  body('pass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
  body('name').isLength({min: 2}).withMessage('Длина имени должна быть не менее 2 символов')
];

export const saveUserDataValidators = [
  body('sex').isIn(['woman', 'man']).withMessage('Укажите правильный пол'),
  body('age').isNumeric().withMessage('Введите верный возраст'),
  body('weight').isNumeric().withMessage('Введите верный вес'),
  body('height').isNumeric().withMessage('Введите правильный рост'),
  body('token').not().isEmpty().withMessage('Необходим токен'),

];

export const changeUserNameValidator = [
  body('name').isLength({min: 2}).withMessage('Длина имени должна быть не менее 3 символов')
];

export const changeUserPassValidator = [
  body('pass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов')
];

export const restorePassValidator = [
  // body('pass').isLength({min: 5}).withMessage('Длина пароля должна быть не менее 5-ти символов'),
  body('email').isEmail().withMessage('Введите правильный e-mail')
];

export const addFoodValidator = [
  body('title').not().isEmpty().withMessage('Необходимо указать название еды'),
  body('callories').isNumeric().withMessage('Введите колличество каллорий цифрами'),
  body('harmfulness').isNumeric().withMessage('Необходимо указать вредность еды'),
  body('units').not().isEmpty().withMessage('Укажите единицы измерения')
];

export const addIllnessValidator = [
  body('title').not().isEmpty().withMessage('Необходимо указать название недомогания'),
  body('danger').isNumeric().withMessage('Выберите опасность недомогания')
];

export const addFoodForDayValidator = [
  body('food_id').not().isEmpty().withMessage('Необходимо выбрать еду'),
  body('amount').isNumeric().withMessage('Введите колличество цифрами'),
];

export const addIllnessForDayValidator = [
  body('health_id').not().isEmpty().withMessage('Необходимо выбрать еду'),
  body('duration').isNumeric().withMessage('Введите продолжительность в часах'),
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
