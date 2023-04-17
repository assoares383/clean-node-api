/* eslint-disable brace-style */
/* eslint-disable indent */
import { AccountModel } from '../add-account/db-add-account-protocols';
import { LoadAccountByEmailRepository } from '../../protocols/load-account-by-email-repository';
import { DbAuthentication } from './db-authentication';

describe('DbAuthentication UseCase', () => {
  test('Should call LoadAccountByEmailRepository with correct email', async () => {
    class LoadAccountByEmailRepositoryStub
      implements LoadAccountByEmailRepository
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async load(email: string): Promise<AccountModel> {
        const account: AccountModel = {
          id: 'any_id',
          name: 'any_name',
          email: 'any_email@mail.com',
          password: 'any_password',
        };
        // eslint-disable-next-line arrow-parens
        return new Promise(resolve => resolve(account));
      }
    }

    // eslint-disable-next-line operator-linebreak
    const loadAccountByEmailRepositoryStub =
      new LoadAccountByEmailRepositoryStub();

    const sut = new DbAuthentication(loadAccountByEmailRepositoryStub);
    const loadSpy = jest.spyOn(loadAccountByEmailRepositoryStub, 'load');
    await sut.auth({
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(loadSpy).toHaveBeenCalledWith('any_email@mail.com');
  });
});
