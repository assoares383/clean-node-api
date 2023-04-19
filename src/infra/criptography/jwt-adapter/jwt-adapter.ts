import jwt from 'jsonwebtoken';
import { Encrypter } from '../../../data/protocols/criptography/encrypter';

export class JwtAdapter implements Encrypter {
  private readonly secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, lines-between-class-members
  async encrypt(value: string): Promise<string> {
    await jwt.sign({ id: value }, this.secret);
    return null;
  }
}
