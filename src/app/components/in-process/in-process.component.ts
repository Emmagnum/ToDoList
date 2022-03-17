import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.css']
})
export class InProcessComponent implements OnInit {

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
