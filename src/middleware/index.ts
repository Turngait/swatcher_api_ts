import { validationResult } from 'express-validator/check';

export async function isValid(req, res, next) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(422);
    res.json(errors);
  } else {
    next();
  }
}
