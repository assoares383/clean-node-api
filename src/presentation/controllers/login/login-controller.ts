/* eslint-disable no-useless-constructor */
/* eslint-disable arrow-parens */
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from '../../helpers/http/http-helpers';
import {
  Authentication,
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from './login-controller-protocols';

export class LoginController implements Controller {
  constructor(
    private readonly authentication: Authentication,
    private readonly validation: Validation,
  ) {}

  // eslint-disable-next-line consistent-return
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }
      const { email, password } = httpRequest.body;
      const accessToken = await this.authentication.auth({ email, password });
      if (!accessToken) {
        return unauthorized();
      }

      return ok({ accessToken });
    } catch (error) {
      return serverError(error);
    }
  }
}
