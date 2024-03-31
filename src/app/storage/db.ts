import Dexie, { Table } from 'dexie';
import { IStorageUser } from './models/storage-user';

export class AppDb extends Dexie {
  users!: Table<IStorageUser, string>;

  constructor() {
    super('clients');
    this.version(1).stores({ users: 'id,name,phone' });
  }
}

export const db = new AppDb();
