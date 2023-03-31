import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  AddAccountRepository,
  Encrypter,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  private readonly addAccountRepository: AddAccountRepository;

  constructor(
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository,
  ) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);
    await this.addAccountRepository.add(
      // eslint-disable-next-line prefer-object-spread
      Object.assign({}, accountData, { password: hashedPassword }),
    );

    // eslint-disable-next-line arrow-parens
    return new Promise(resolve => resolve(null));
  }
}
