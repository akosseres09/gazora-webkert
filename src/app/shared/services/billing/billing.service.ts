import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {BillingInfo} from "../../models/BillingInfo";

@Injectable({
  providedIn: 'root'
})
export class BillingService {
    BILLING_COLLECTION_NAME = 'BillingInfos';

    constructor(private firestore: AngularFirestore) { }

    create(billing: BillingInfo) {
        const id = this.firestore.createId();
        billing.id = id;
        return this.firestore.collection<BillingInfo>(this.BILLING_COLLECTION_NAME)
            .doc(id).set(billing);
    }

    getAll() {
        return this.firestore.collection<BillingInfo>(this.BILLING_COLLECTION_NAME)
            .valueChanges();
    }

    getById(id: string) {
        return this.firestore.collection<BillingInfo>(this.BILLING_COLLECTION_NAME)
            .doc(id).valueChanges();
    }

    getAllToUser(uid: string) {
        return this.firestore.collection<BillingInfo>(this.BILLING_COLLECTION_NAME,
            ref => ref.where('uid', '==', uid).orderBy('date', 'asc')
            ).valueChanges();
    }

    update(billing: BillingInfo) {
        return this.firestore.collection<BillingInfo>(this.BILLING_COLLECTION_NAME)
            .doc(billing.id).set(billing);
    }

    delete(id: string) {
        return this.firestore.collection<BillingInfo>(this.BILLING_COLLECTION_NAME)
            .doc(id).delete();
    }
}
