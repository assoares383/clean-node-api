/* eslint-disable consistent-return */
import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { InvalidParamError } from '../errors/invalid-param-error';
import { badRequest } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';
import { EmailValidator } from '../protocols/email-validator';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

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

    const isValid = this.emailValidator.isValid(httpRequest.body.email);

    if (!isValid) {
      return badRequest(new InvalidParamError('email'));
    }
  }
}