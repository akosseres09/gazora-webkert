import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Address} from "../../models/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    ADDRESS_COLLECTION_NAME = 'Addresses';
    uid: string = localStorage.getItem('user') as string;
    constructor(private firestore: AngularFirestore) { }

    create(address: Address) {
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME)
            .doc().set(address);
    }

    findAllToUid(uid: string) {
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME)
            .valueChanges();
    }

    findAll() {
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME)
            .valueChanges();
    }

    delete() {

    }
}
