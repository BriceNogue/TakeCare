import { PersonModel } from "./person-model";

export class PatientModel {
   public id: number;
   public patient_code: string;
   public first_name: string;
   public last_name: string;
   public address: string;
   public inscription_date: Date;
   public birthday: Date;
   public age: number;
   public gender: string;
   public assurance: string;
   public phone?: string;
   public picture?: ImageData;
   public marital_status?: string;
   public emergency_number?: string;
   public occupation?: string;
   public password?: string;

    constructor(
        id: number,
        patient_code: string,
        first_name: string,
        last_name: string,
        address: string,
        inscription_date: Date,
        birthday: Date,
        age: number,
        gender: string,
        assurance: string,
        phone?: string,
        picture?: ImageData,
        marital_status?: string,
        emergency_number?: string,
        occupation?: string,
        password?: string
    ) {
        this.id = id,
        this.patient_code = patient_code;
        this.first_name = first_name,
        this.last_name = last_name,
        this.address = address
        this.inscription_date = inscription_date;
        this.birthday = birthday;
        this.age = age;
        this.gender = gender;
        this.assurance = assurance;
        this.phone = phone;
        this.picture = picture;
        this.marital_status = marital_status;
        this.emergency_number = emergency_number;
        this.occupation = occupation;
        this.password = password;
    }
}