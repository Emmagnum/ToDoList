import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { type } from 'os';
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

  itemDocument!: AngularFirestoreDocument<Item>;
  itemsObservable!: Observable<Item[]>;

  ngOnInit(): void {
    // Step 1: Make a reference
  this.itemsCollection = this.afs.collection('Item');

 // Step 2: Get an observable of the data
  this.itemsObservable = this.itemsCollection.valueChanges();
  }


}
