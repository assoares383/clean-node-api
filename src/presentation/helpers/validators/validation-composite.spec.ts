import { ValidationComposite } from './validation-composite';
import { MissingParamError } from '../../errors';
import { Validation } from './validation';

describe('Validate Composite', () => {
  test('Should return an error if any validation fails', () => {
    class ValidationStub implements Validation {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      validate(input: any): Error {
        return new Error();
      }
    }
    const validationStub = new ValidationStub();
    const sut = new ValidationComposite([validationStub]);
    const error = sut.validate({ field: 'any_value' });
    expect(error).toEqual(new MissingParamError('field'));
  });
});
