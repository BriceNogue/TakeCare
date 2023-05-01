import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  public setView: View = 'WorkWeek';
  //public setDate: Date = new Date(2017, 5, 5);
  public setDate: Date = new Date(2023, 3, 12);

  /*private eventData: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: false
  })*/

  public eventObject: EventSettingsModel = {
    //dataSource: this.eventData,

    dataSource: [
      {
        id: 1,
        Subject: "Dr LauriDev",
        StartTime: new Date(2023, 3, 13, 17, 0),
        EndTime: new Date(2023, 3, 13, 18, 0)
      },
      {
        id: 1,
        Subject: "Dr LauriDev",
        StartTime: new Date(2023, 3, 13, 17, 0),
        EndTime: new Date(2023, 3, 13, 18, 0)
      },
      {
        id: 1,
        Subject: "Dr LauriDev",
        StartTime: new Date(2023, 3, 14, 16, 0),
        EndTime: new Date(2023, 3, 14, 17, 0)
      },
      {
        id: 1,
        Subject: "Dr LauriDev",
        StartTime: new Date(2023, 3, 12, 18, 0),
        EndTime: new Date(2023, 3, 12, 19, 0)
      }
    ]
  }

  public setViews: View[] = ["Day", "Week", "WorkWeek", "Agenda", "TimelineMonth", "TimelineDay"];

  constructor() { }

  ngOnInit(): void {
      
  }
}
