import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/User";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    USER_COLLECTION_NAME = 'Users';
    constructor(private fireStore: AngularFirestore, private auth: AngularFireAuth) { }
    create(user: User) {
        return this.fireStore.collection<User>(this.USER_COLLECTION_NAME)
            .doc(user.uid).set(user);
    }

    findAll() {
        return this.fireStore.collection<User>(this.USER_COLLECTION_NAME)
            .valueChanges();
    }

    findOne(uid: string) {
        return this.fireStore.collection<User>(this.USER_COLLECTION_NAME)
            .doc(uid).valueChanges();
    }

    update(user: User) {
        return this.fireStore.collection<User>(this.USER_COLLECTION_NAME)
            .doc(user.uid).set(user);
    }

    delete(uid: string) {
        this.fireStore.collection<User>(this.USER_COLLECTION_NAME)
            .doc(uid).delete();
    }
}
