export class PersonModel {
    private id: number;
    private first_name: string;
    private last_name: string;
    private adress: string;
    private phone?: string;
    private picture?: ImageData;

    constructor(id: number, first_name: string, last_name: string, adress: string, phone?: string, picture?: ImageData) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.adress = adress;
        this.phone = phone;
        this.picture = picture;
    }
}