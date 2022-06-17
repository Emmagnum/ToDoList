import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('items').valueChanges();
  }
  person = {
    tasks: 'juan',
    age: '',
  }

  title = 'my-list-app';
  tasks: string[] = [];
  newName = '';



  addName() {
    this.tasks.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.tasks.splice(index, 1)
  }




  saveTask(){
    localStorage.setItem('names', JSON.stringify(this.tasks))
  }

}



