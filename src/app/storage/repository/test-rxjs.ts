import { Observable, from } from 'rxjs';

export class TestRxjs {
  public start(): Observable<number> {
    return from([1, 2, 3, 4]);
  }
}
