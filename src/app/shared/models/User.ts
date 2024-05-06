export const ADMIN = true;
export const USER = false;
export const ROLES = {
    'ADMIN': 'Admin',
    'USER': 'User'
}

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
