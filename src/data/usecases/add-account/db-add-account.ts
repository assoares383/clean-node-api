import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  AddAccountRepository,
  Hasher,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
  ) {
    this.hasher = hasher;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(accountData.password);
    const account = await this.addAccountRepository.add(
      // eslint-disable-next-line prefer-object-spread
      Object.assign({}, accountData, { password: hashedPassword }),
    );

    return account;
  }
}
