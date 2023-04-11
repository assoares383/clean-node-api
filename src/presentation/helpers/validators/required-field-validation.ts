import { Validation } from './validation';
// eslint-disable-next-line import/no-useless-path-segments
import { MissingParamError } from '../../../presentation/errors';

export class RequireFieldValidation implements Validation {
  private readonly fieldName: string;

  constructor(fieldName: string) {
    this.fieldName = fieldName;
  }

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
