import { Validation } from './validation';
// eslint-disable-next-line import/no-useless-path-segments
import { InvalidParamError } from '../../errors';

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string;

  private readonly fieldToCompareName: string;

  constructor(fieldName: string, fieldToCompareName: string) {
    this.fieldName = fieldName;
    this.fieldToCompareName = fieldToCompareName;
  }

  validate(input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName);
    }
  }
}
