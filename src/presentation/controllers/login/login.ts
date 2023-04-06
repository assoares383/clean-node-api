/* eslint-disable arrow-parens */
import { badRequest } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { MissingParamError } from '../../errors';

export class LoginController implements Controller {
  // eslint-disable-next-line consistent-return
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise(
        resolve =>
          // eslint-disable-next-line implicit-arrow-linebreak
          resolve(badRequest(new MissingParamError('email'))),
        // eslint-disable-next-line function-paren-newline
      );
    }

    if (!httpRequest.body.password) {
      return new Promise(
        resolve =>
          // eslint-disable-next-line implicit-arrow-linebreak
          resolve(badRequest(new MissingParamError('password'))),
        // eslint-disable-next-line function-paren-newline
      );
    }
  }
}
