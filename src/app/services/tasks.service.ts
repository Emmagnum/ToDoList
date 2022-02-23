import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: any[] = [];

  constructor() { }


  keepTask() {
    const localStorageData = localStorage.getItem('tasks');
    if (localStorageData) {
      this.tasks = JSON.parse(localStorageData);
    }
  }


  saveTask(){
    const parsedData = JSON.stringify(this.tasks);
    console.log(parsedData);
    localStorage.setItem('tasks', parsedData);
  }
}
