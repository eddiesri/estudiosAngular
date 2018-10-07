import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }
export interface ItemId extends Item { id: string; }

@Injectable({
  providedIn: 'root'
})


export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;

  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(deleteItem){
    this.itemDoc = this.afs.doc<Item>(`items/${deleteItem.id}`);
    this.itemDoc.delete();
  }

  editItem(editItem){
    this.itemDoc = this.afs.doc<Item>(`items/${editItem.id}`);
    this.itemDoc.update(editItem);
  }

  listaItem(){
    return this.items;
  }

}
