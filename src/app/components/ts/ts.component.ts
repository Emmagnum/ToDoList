import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.css']
})
export class TsComponent implements OnInit {

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
