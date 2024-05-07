import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {GasMeter} from "../../models/gasMeter";

@Injectable({
  providedIn: 'root'
})
export class GasMeterService {
    GAS_METER_COLLECTION_NAME = 'GasMeters';
    constructor(private fireStore: AngularFirestore) { }

    create(gasMeter: GasMeter) {
        const id: string = this.fireStore.createId()
        console.log(id);
        gasMeter.id = id;
        return this.fireStore.collection<GasMeter>(this.GAS_METER_COLLECTION_NAME)
            .doc(id).set(gasMeter);
    }

    findAll(){
       return this.fireStore.collection<GasMeter>(this.GAS_METER_COLLECTION_NAME)
           .valueChanges();
    }

    findAllToUser(uid: string) {
        return this.fireStore.collection<GasMeter>(this.GAS_METER_COLLECTION_NAME,
            ref => ref.where('address.uid', '==', uid).orderBy('date', 'asc')
            ).valueChanges();
    }

    findById(id: string) {
        return this.fireStore.collection<GasMeter>(this.GAS_METER_COLLECTION_NAME)
            .doc(id).valueChanges();
    }

    update(meter: GasMeter) {
        return this.fireStore.collection<GasMeter>(this.GAS_METER_COLLECTION_NAME)
            .doc(meter.id).update(meter);
    }

    delete(id: string) {
        return this.fireStore.collection<GasMeter>(this.GAS_METER_COLLECTION_NAME)
            .doc(id).delete();
    }
}
