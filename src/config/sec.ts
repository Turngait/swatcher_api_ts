import crypto from 'crypto';

const SALT = process.env.SALT || '';
const SALT2 = process.env.SALT2 || '';

export function createPassword(pass: string, paper: string): string {
  const newPass = crypto.createHash('md5').update(pass).digest('hex');
  return paper + newPass + SALT;
}

export function createPaper(): string {
  return crypto.createHash('md5').update(String(Date.now())).digest('hex');
}

export function createToken(): string {
  return crypto.createHash('md5').update(String(Date.now())).digest('hex');
}

export function createHashForRecovery(email): string {
  return crypto.createHash('md5').update(email+SALT2).digest('hex');
}
