import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book, JsonBook} from './book';
import {Observable} from 'rxjs/Observable';
import {catchError, filter, map, reduce, tap} from 'rxjs/operators';

@Injectable()
export class CatalogService {

  private readonly url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Book[]> {
    return this.http.get<JsonBook[]>(this.url)
      .pipe(
        map(jsonBookList => jsonBookList.map(jsonBook => new Book(jsonBook)))
      );
  }
}
