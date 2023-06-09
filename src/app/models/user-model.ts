export class UserModel {
    public _id: string;
    public user_code: string;
    public first_name: string;
    public last_name: string;
    public address: string;
    public service_id: string;
    public role: string;
    public phone?: string;
    public picture?: string;
    public password: string;

    constructor(
        user_code: string = '',
        first_name: string = '',
        last_name: string = '',
        address: string = '',
        service_id: string = '',
        phone: string = '',
        picture: string = '',
        password: string = ''
    ) {
        this.user_code = user_code;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.service_id = service_id;
        this.phone = phone;
        this.picture = picture;
        this.password = password;
    }
}