import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  pending: string[] = [];
  inProcess: string[] = [];
  done: string[] = [];
  tasks: any[] = [];
  newName: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  names: string[] = [];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.saveTask();
  }

  addName(array: any[]) {
    if (this.newName) {
      array.push(this.newName);
      this.newName = '';
    }
    this.saveTask();
  }

  deleteName(array: any[], index: number) {
    array.splice(index, 1)
    this.saveTask();
  }

  keepTask() {
    const localStorageData = localStorage.getItem('tasks');
    if (localStorageData) {
      this.tasks = JSON.parse(localStorageData);
    }
  }


  saveTask(){
    const parsedData = JSON.stringify({pending: this.pending, inProcess: this.inProcess, done: this.done});
    console.log(parsedData);
    localStorage.setItem('tasks', parsedData);
  }
}
