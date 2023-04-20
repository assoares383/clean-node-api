/* eslint-disable no-useless-constructor */
import jwt from 'jsonwebtoken';
import { Encrypter } from '../../../data/protocols/criptography/encrypter';

export class JwtAdapter implements Encrypter {
  constructor(private readonly secret: string) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, lines-between-class-members
  async encrypt(value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret);
    return accessToken;
  }
}
