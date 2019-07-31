export interface IUser {
    imgUrl: string;
    name: string;
    status: string;
    email?: string;
    phone?: string;
    company?: string;
    user_id: string;
}
export class User {
    public  imgUrl: string;
    public name: string;
    public status: string;
    public email?: string;
    public phone?: string;
    public company?: string;
    public user_id: string;
    constructor() {
    }
 }
