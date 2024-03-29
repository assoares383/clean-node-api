/* eslint-disable consistent-return */
/* eslint-disable no-useless-constructor */
import { Validation } from '../../presentation/protocols';
// eslint-disable-next-line import/no-useless-path-segments
import { MissingParamError } from '../../presentation/errors';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
