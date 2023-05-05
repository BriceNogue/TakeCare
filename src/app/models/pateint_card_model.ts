export class PatientCardModel {
    _id: string;
    patient_card_code: string;
    patient_card_date: string;
    user_id: string;
    //consultation_id: string;
    temperature: string;
    blood_pressure: string;
    weight: string;
    size: string;
    consultation_details: string;
    examinations: [];
    patient_id: string;

    constructor(
        consultation_id: string = "",
        consultation_details: string = "",
        temperature: string = "",
        blood_pressure: string = "",
        weight: string = "",
        size: string = "",
        user_id: string = "",
        examinations: [] = [],
        patient_id: string = ""

    ) {
        //this.consultation_id = consultation_id;
        this.consultation_details = consultation_details;
        this.temperature = temperature;
        this.blood_pressure = blood_pressure;
        this.weight = weight;
        this.size = size;
        this.user_id = user_id;
        this.examinations = examinations;
        this.patient_id = patient_id;

    }
}