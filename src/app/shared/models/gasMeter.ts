import {Address} from "./Address";

export interface GasMeter {
    id?: string,
    name: string,
    uid: string,
    date: number,
    address: Address,
    currentPosition?: number,
    lastPosition?: number
}
