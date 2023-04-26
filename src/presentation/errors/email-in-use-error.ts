export class EmailInUseError extends Error {
  constructor() {
    super('The received wmail already in use');

    this.name = 'EmailInUseError';
  }
}
