export class AppointmentModel {
    _id: string;
    appointment_code: string;
    appointment_date: string;
    date_of_appointment: string;
    appointment_hour: string
    //patient_code: string;
    //patient_name: string;
    //patient_phone: string;
    patient_id: string;
    service_id: string;
    //service_libelle: string;
    //user_code: string;
    //user_name: string;
    user_id: string;

    constructor(
        date_of_appointment: string="",
        appointment_hour: string ="",
        //patient_code: string ="",
        //patient_name: string ="",
        //patient_phone: string ="",
        service_id: string ="",
        //user_code: string ="",
        //user_name: string ="",
        user_id: string ="",
    ) {
        this.date_of_appointment = date_of_appointment;
        this.appointment_hour = appointment_hour;
        //this.patient_code = patient_code;
        //this.patient_name = patient_name;
        //this.patient_phone = patient_phone;
        this.service_id = service_id;
        //this.service_libelle = service_libelle;
        //this.user_code = user_code;
        //this.user_name = user_name
        this.user_id = user_id;
    }
}