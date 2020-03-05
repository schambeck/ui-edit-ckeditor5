import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export const indicate = <T>(indicator: Subject<boolean>) => {
  console.log('indicator')
  indicator.next(true);
  return (source: Observable<T>): Observable<T> => source.pipe(
    tap(() => {
        console.log('next')
        indicator.next(false);
      })
  );
};

// export const prepare = <T>(callback: () => void) => {
//   return (source: Observable<T>): Observable<T> => defer(() => {
//     callback();
//     return source;
//   });
// };

// export const indicate = <T>(indicator: Subject<boolean>) => {
//   return (source: Observable<T>): Observable<T> => source.pipe(
//     prepare(() => indicator.next(true)),
//     finalize(() => indicator.next(false))
//   );
// };
