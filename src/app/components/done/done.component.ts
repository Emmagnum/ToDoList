import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'my-list-app';
  names: string[] = [];
  newName = '';


  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }


  deleteName(index: number){
    this.names.splice(index, 1)
  }
}
