import PasswordValidator from "password-validator";

export enum PossibleErrors {
  hasSpecialChar = "hasSpecialChar",
  hasNumber = "hasNumber",
  hasUppercase = "hasUppercase",
  hasNoConsecutiveLetters = "hasNoConsecutiveLetters",
}

export const availableErrorsMessages = Object.freeze({
  hasSpecialChar: 'Has a special char !@#$%ˆ&*',
  hasNumber: 'Has a number 0-9',
  hasUppercase: 'Has uppercase letter',
  hasNoConsecutiveLetters: 'Has no consecutive characters',
})

export const buildPasswordSchema = (reqs: PossibleErrors[]) => {
  let passwordValidator = new PasswordValidator();
  if (!reqs?.length) return passwordValidator;

  if (reqs.includes(PossibleErrors.hasNumber)) passwordValidator = passwordValidator.has().digits(1, availableErrorsMessages["hasNumber"]);
  if (reqs.includes(PossibleErrors.hasSpecialChar)) passwordValidator = passwordValidator.has().symbols(1, availableErrorsMessages["hasSpecialChar"]);
  if (reqs.includes(PossibleErrors.hasUppercase)) passwordValidator = passwordValidator.has().uppercase(1, availableErrorsMessages["hasUppercase"]);
  if (reqs.includes(PossibleErrors.hasNoConsecutiveLetters)) passwordValidator = passwordValidator.not(/(.)\1+/g, availableErrorsMessages["hasNoConsecutiveLetters"]);

  return passwordValidator;
}

export interface ErrorDetail {
  arguments: number;
  message: string;
  validation: string;
}