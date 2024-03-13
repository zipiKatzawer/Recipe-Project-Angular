import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
  getCategotyList(): Observable<Category[]> {
    return this._http.get<Category[]>('https://localhost:7130/api/Category/AllCategories')
  }
}
