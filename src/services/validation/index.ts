import PasswordValidator from "password-validator";

export const passwordSchema = new PasswordValidator()
  .has().digits(1)
  .has().uppercase(1)
  .has().symbols(1)
  .not(/(.)\1+/g, 'Has no consecutive characters')


export interface ErrorDetail {
  arguments: number;
  message: string;
  validation: string;
}