import { Collection, MongoClient } from 'mongodb';

export const MongoHelper = {
  client: null as MongoClient,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
  async disconnect(): Promise<void> {
    await this.client.close();
  },
  getCollection(name: string): Collection {
    return this.client.db().collection(name);
  },
  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection;
    // eslint-disable-next-line prefer-object-spread
    return Object.assign({}, collectionWithoutId, { id: _id });
  },
};
