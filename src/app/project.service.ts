import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Project } from './project';

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

  private handleError<T>(operation = 'operation', result?: T) {
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
        catchError(this.handleError('getProjects', []))
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

  /** PUT: update the hero on the server */
  updateProject(project: Project): Observable<any> {
    const url = `${this._projectsUrl}/${project.id}`;
    return this.http.put(url // Have a look at this
      , project, httpOptions).pipe(
        tap(_ => this.log(`updated project id=${project.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  /** POST: add a new project to the server */
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this._projectsUrl, project, httpOptions).pipe(
      tap((project: Project) => this.log(`added project w/ id=${project.id}`)),
      catchError(this.handleError<Project>('addProject'))
    );
  }

  /** DELETE: delete the project from the server */
  deleteProject(project: Project | number): Observable<Project> {
    const id = typeof project === 'number' ? project : project.id;
    const url = `${this._projectsUrl}/${id}`;

    return this.http.delete<Project>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted project id=${id}`)),
      catchError(this.handleError<Project>('deleteProject'))
    );
  }

  /* GET projects whose name contains search term */
  searchProjects(term: string): Observable<Project[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Project[]>(`${this._projectsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found projects matching "${term}"`)),
      catchError(this.handleError<Project[]>('searchProjects', []))
    );
  }


}
