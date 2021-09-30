import { validationResult } from 'express-validator/check';
import {API_KEYS} from '../config/api';
import User from '../models/User';

export async function isValid(req, res, next) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(422);
    res.json(errors);
  } else {
    next();
  }
}

export function checkApiKey(req, res, next) {
  if (req.headers['api-key'] && API_KEYS.includes(req.headers['api-key'])) {
    next();
  } else {
    res.json({status: 403, error: 'Incorrect Api key', appVersion: '1.0.7'});
  }
};

export async function checkToken(req, res, next) {
  const { token } = req.body;
  if (token) {
    const userId = await User.getUserIdByToken(token);
    if (userId) {
      req.body.userId = userId;
      next();
    } else {
      res.status(403);
      res.json({status: 403, error: 'Token is not valid'});
    }
  } else {
    res.status(400);
    res.json({status: 400, error: 'Token is required'});
  }
}