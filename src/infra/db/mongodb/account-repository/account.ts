/* eslint-disable brace-style */
/* eslint-disable indent */
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { AddAccountRepository } from '../../../../data/protocols/db/add-account-repository';
import { MongoHelper } from '../helpers/mongo-helper';
import { LoadAccountByEmailRepository } from '../../../../data/protocols/db/load-account-by-email-repository';

export class AccountMongoRepository
  implements AddAccountRepository, LoadAccountByEmailRepository
{
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const result = await accountCollection.insertOne(accountData);
    return MongoHelper.map(result.ops[0]);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async loadByEmail(email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({ email });
    return MongoHelper.map(account);
  }
}
