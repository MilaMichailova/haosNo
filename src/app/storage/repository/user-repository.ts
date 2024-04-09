import { Observable, from, map } from 'rxjs';
import { IStorageUser } from '../models/storage-user';
import { db } from '../db';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserRepository {
  public saveClient(user: IStorageUser): Observable<string> {
    return from(db.users.add(user, user.id));
  }

  public getClient(userId: string): Observable<IStorageUser | undefined> {
    return from(db.users.get(userId));
  }

  public getClients(userIds: string[]): Observable<IStorageUser[]> {
    return from(db.users.bulkGet(userIds)).pipe(
      map((users) =>
        users.filter((user) => !!user).map((user) => user as IStorageUser)
      )
    );
  }

  public getAllClients(): Observable<IStorageUser[]> {
    return from(db.users.toArray());
  }
}
