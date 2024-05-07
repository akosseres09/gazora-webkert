import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Address} from "../../models/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    ADDRESS_COLLECTION_NAME = 'Addresses';
    constructor(private firestore: AngularFirestore) { }

    create(address: Address) {
        const id = this.firestore.createId();
        address.id = id;
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME)
            .doc(id).set(address);
    }

    findAllToUid(uid: string) {
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME,
            ref => ref.where('uid', '==', uid)
            ).valueChanges();
    }

    findById(id: string) {
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME)
            .doc(id).valueChanges();
    }

    findAll() {
        return this.firestore.collection<Address>(this.ADDRESS_COLLECTION_NAME)
            .valueChanges();
    }
}
