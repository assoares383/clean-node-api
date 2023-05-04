/* eslint-disable consistent-return */
/* eslint-disable no-useless-constructor */
import { Validation } from '../../presentation/protocols';
// eslint-disable-next-line import/no-useless-path-segments
import { InvalidParamError } from '../../presentation/errors';

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string,
  ) {}

  validate(input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName);
    }
  }
}
