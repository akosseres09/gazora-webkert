import {Address} from "./Address";
import {Timestamp} from "firebase/firestore";

export interface GasMeter {
    id?: string,
    name: string,
    uid: string,
    date: Timestamp,
    address: Address,
    currentPosition?: number,
    lastPosition?: number
}
