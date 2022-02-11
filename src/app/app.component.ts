import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    name: 'juan',
    age: '',
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



