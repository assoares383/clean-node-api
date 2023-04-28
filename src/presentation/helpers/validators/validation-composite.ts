/* eslint-disable no-useless-constructor */
import { Validation } from '../../protocols/validation';

export class ValidationComposite implements Validation {
  constructor(private readonly validations: Validation[]) {}

  // eslint-disable-next-line consistent-return
  validate(input: any): Error {
    for (const validation of this.validations) {
      const error = validation.validate(input);

      if (error) {
        return error;
      }
    }
  }
}
