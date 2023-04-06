import { badRequest } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { MissingParamError } from '../../errors';

export class LoginController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    // eslint-disable-next-line arrow-parens
    return new Promise(resolve =>
      // eslint-disable-next-line implicit-arrow-linebreak
      resolve(badRequest(new MissingParamError('email'))),
    );
  }
}
