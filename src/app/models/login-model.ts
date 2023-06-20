export class LoginModel {
    user_code: string;
    password: string;

    constructor(
        user_code: string = "",
        password: string = ""
    ) { 
        this.user_code = user_code;
        this.password = password;
    }
}