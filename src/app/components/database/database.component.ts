import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs'

export interface Item { title: string; author: string; content: string }

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']

})
export class DatabaseComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('posts');
    this.items = this.itemsCollection.valueChanges();
  }
  addItems(item: Item){
    this.itemsCollection.add(item);
  }
  ngOnInit(): void {
  }

}
