import PasswordValidator from "password-validator";

export enum PossibleErrors {
  "specialChar",
  "hasNumber",
  "hasUppercase",
  "hasNoConsecutiveLetters",
}

export const availableErrors = Object.freeze({
  specialChar: 'Has a special char !@#$%ˆ&*',
  hasNumber: 'Has a number 0-9',
  hasUppercase: 'Has uppercase letter',
  hasNoConsecutiveLetters: 'Has no consecutive characters',
})

export const passwordSchema = new PasswordValidator()
  .has().digits(1, availableErrors["hasNumber"])
  .has().uppercase(1, availableErrors["hasUppercase"])
  .has().symbols(1, availableErrors["specialChar"])
  .not(/(.)\1+/g, availableErrors["hasNoConsecutiveLetters"])


export interface ErrorDetail {
  arguments: number;
  message: string;
  validation: string;
}