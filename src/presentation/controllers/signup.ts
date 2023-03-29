/* eslint-disable consistent-return */
import {
  Controller,
  EmailValidator,
  HttpResponse,
  HttpRequest,
} from '../protocols';
import { MissingParamError, InvalidParamError } from '../errors';
import { badRequest, serverError } from '../helpers/http-helpers';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
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

      const isValid = this.emailValidator.isValid(httpRequest.body.email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (error) {
      return serverError();
    }
  }
}
