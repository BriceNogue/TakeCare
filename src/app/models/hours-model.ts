export class HoursModel {
    _id: string;
    service_id: string;
    date: string;
    startTime: string;
    endTime: string;

    constructor(
        service_id: string ="",
        date: string = "",
        startTime: string = "",
        endTime: string = ""
    ) {
        this.service_id = service_id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime
    }
}