import {Timestamp} from "firebase/firestore";

export interface Address {
    id?: string
    uid: string,
    date: Timestamp
    country: string,
    state: string
    city: string,
    street: string
    houseNumber: string
    floor?: string,
    doorNumber?: string
}
