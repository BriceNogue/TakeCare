export class PatientCardModel {
    patient_card_code: string;
    patient_card_date: string;
    user_id: string;
    consultation_id: string;
    consultation_details: string;
    examinations: [];
    patient_id: string;

    constructor (
        consultation_id: string ="",
        consultation_details: string ="",
        user_id: string = "",
        examinations: [] = [],
        patient_id: string = ""
       
    ) {
        this.consultation_id = consultation_id;
        this.consultation_details = consultation_details;
        this.user_id = user_id;
        this.examinations = examinations;
        this.patient_id = patient_id;

    }
}