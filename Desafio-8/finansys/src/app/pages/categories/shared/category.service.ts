import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiPath: string = "https://p38yx781aa.execute-api.us-east-1.amazonaws.com/Stage/categorias"
  private userId:string ="user_id=anderson_ferreira";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get(this.apiPath+"?"+this.userId).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }

  getByid(id: string): Observable<Category> {
    const url = `${this.apiPath}/${id}/?${this.userId}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  create(category: Category): Observable<Category> {
    category.id = category.name;

    return this.http.post(this.apiPath, category).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  update(category: Category): Observable<Category> {
    const url = `${this.apiPath}?${category.id}/${category.user_id}`;

    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category )
    )
  }

  delete(id:string): Observable<any> {
    const url = `${this.apiPath}?${this.userId}&id=${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  // PRIVATE METHODS

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

}

