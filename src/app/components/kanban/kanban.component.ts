import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  pending: string[] = [];
  inProcess: string[] = [];
  done: string[] = [];

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
  }

  addName(array: any[]) {
    if (this.newName) {
      array.push(this.newName);
      this.newName = '';
    }
  }

  deleteName(array: any[], index: number) {
    array.splice(index, 1)
  }

}
