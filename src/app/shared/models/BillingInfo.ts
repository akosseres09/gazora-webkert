import {Address} from "./Address";
import {Timestamp} from "firebase/firestore";

export interface BillingInfo {
    id?: string,
    uid: string,
    address: Address,
    date: Timestamp
}
