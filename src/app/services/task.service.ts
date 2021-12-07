import { Injectable } from '@angular/core';
import {Task} from '../Task'
import {HttpClient, HttpHeaders} from '@angular/common/http';//for http client
//to use the above import go to app.module.ts and added line with comment "here"

//to make it observable
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);//httpCLient returns Observable
    //returning an Observable which contains Task array
  }

  deleteTask(task: Task): Observable<Task>{
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
    //httpOptions specifyes the content type
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
