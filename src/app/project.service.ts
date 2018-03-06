import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './project-mock';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {
    
  private url = 'http://localhost:3404/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
  
  getData(): Observable<Project[]> {
      return this.http.get(this.url)
        .pipe(
          tap(heroes => this.log(`fetched projects`)),
          catchError(this.handleError('getData', []))
        );
  }
  
  private log(message: string) {
    console.log('Log: ' + message);
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
