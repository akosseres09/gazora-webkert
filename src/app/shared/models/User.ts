export const ADMIN = true;
export const USER = false;

export interface User {
    uid: string
    email: string,
    username: string,
    name?: {
        first: string,
        last: string
    }
    admin: boolean,
}
