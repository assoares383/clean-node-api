/* eslint-disable consistent-return */
import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requireFields = [
      'name',
      'email',
      'password',
      'password_confirmation',
    ];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
