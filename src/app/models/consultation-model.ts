export class ConsultationModel {
    _id: string
    consultation_code: string;
    appointment_id: string;
    user_id: string;
    consultation_date: Date;
    service_id: string;
    patient_id: string

    constructor(
        appointmentId: string = "",
        user_id: string = "",
        service_id: string,
        patient_id: string
    ) {
        this.appointment_id = appointmentId;
        this.user_id = user_id;
        this.service_id = service_id;
        this.patient_id = patient_id
    }
    
}