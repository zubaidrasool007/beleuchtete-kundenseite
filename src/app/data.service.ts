import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './types';


@Injectable({
  providedIn: 'root'
})

export class DataService {


  constructor(public http: HttpClient) { }

  getarraydata() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')

  }
}
