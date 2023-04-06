/* eslint-disable arrow-parens */
import { badRequest, serverError } from '../../helpers/http-helpers';
import {
  Controller,
  EmailValidator,
  HttpRequest,
  HttpResponse,
} from '../../protocols';
import { InvalidParamError, MissingParamError } from '../../errors';

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  // eslint-disable-next-line consistent-return
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body;

      if (!email) {
        return new Promise(
          resolve =>
            // eslint-disable-next-line implicit-arrow-linebreak
            resolve(badRequest(new MissingParamError('email'))),
          // eslint-disable-next-line function-paren-newline
        );
      }

      if (!password) {
        return new Promise(
          resolve =>
            // eslint-disable-next-line implicit-arrow-linebreak
            resolve(badRequest(new MissingParamError('password'))),
          // eslint-disable-next-line function-paren-newline
        );
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return new Promise(
          resolve =>
            // eslint-disable-next-line implicit-arrow-linebreak
            resolve(badRequest(new InvalidParamError('email'))),
          // eslint-disable-next-line function-paren-newline
        );
      }
    } catch (error) {
      return serverError(error);
    }
  }
}
