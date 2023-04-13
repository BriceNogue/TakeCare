export class UserModel {
    public id: number;
    public user_code: string;
    public first_name: string;
    public last_name: string;
    public address: string;
    public service: string;
    public phone?: string;
    public picture?: string;
    public password?: string;

    constructor(
        user_code: string = '',
        first_name: string = '',
        last_name: string = '',
        address: string = '',
        service: string = '',
        phone: string = '',
        picture: string = '',
        password: string = ''
    ) {
        this.user_code = user_code;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.service = service;
        this.phone = phone;
        this.picture = picture;
        this.password = password;
    }
}