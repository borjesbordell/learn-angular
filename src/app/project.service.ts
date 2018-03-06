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
    
  private _projectsUrl: string = 'http://localhost:3405/projects';

  constructor(private http: HttpClient) { }
  
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
  
  getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>(this._projectsUrl)
        .pipe(
          tap(projects => this.log(`fetched projects`)),
          catchError(this.handleError('getData', []))
        );
  }
  
  /** GET Project by id. Will 404 if id not found */
    getProject(id: number): Observable<Project> {
      const url = `${this._projectsUrl}/${id}`;
      return this.http.get<Project>(url).pipe(
        tap(_ => this.log(`fetched Project id=${id}`)),
        catchError(this.handleError<Project>(`getProject id=${id}`))
      );
    }
  
  

}
