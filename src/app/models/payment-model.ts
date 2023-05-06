export class PaymentModel {
    _id: string;
    payment_code: string;
    patient_card_id: string;
    amount_to_be_paid: number;
    payment_date: string;
    amount_paid: number;
    status: string;
    user_id: string;

    constructor(
        patient_card_id: string ="",
        amount_to_be_paid: number = 0,
        amount_paid: number =0,
        status: string = "",
        user_id: string =""
    ) {
        this.patient_card_id = patient_card_id,
        this.amount_to_be_paid = amount_to_be_paid,
        this.amount_paid = amount_paid,
        this.status = status,
        this.user_id = user_id
    }
}