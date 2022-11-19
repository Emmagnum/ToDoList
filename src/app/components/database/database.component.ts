import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

export interface Item { title: string; author: string; id: string; content: string }


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
    this.items = this.itemsCollection.snapshotChanges().pipe(map(arr =>
      arr.map(snap => {
       const data = snap.payload.doc.data();
       const id = snap.payload.doc.id;
       return { ...data, id };
       })));

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
  this.itemsObservable = this.itemsCollection.snapshotChanges().pipe(map(arr =>
    arr.map(snap => {
     const data = snap.payload.doc.data();
     const id = snap.payload.doc.id;
     return { ...data, id };
     })));



  const doc = this.afs.doc('items/ItemID');

  const data = {
     author: String,
     title: String,
     content: String
     };

  doc.set(data); // reset all properties with new data
  doc.update({ publisher: String }); // update individual properties
  doc.delete(); // update individual properties

  doc.update(data)
  .then(() => console.log('success') )
  .catch(err => console.log(err) )
  }

  // Metodos CRUD

  async deleteDoc(collection: string, docId: string) {
    await this.afs.doc(`${collection}/${docId}`).delete();
  }

  async deleteDocInItems(docId: string) {
    console.log(docId);
    await this.deleteDoc('posts', docId);
  }

  async addDoc(collection: string, docId: string) {
    await this.afs.doc(`${collection}/${docId}`).set(DatabaseComponent);
  }

  async addDocInItems(docId: string) {
    console.log(docId);
    await this.addDoc('posts', docId);
  }
}

