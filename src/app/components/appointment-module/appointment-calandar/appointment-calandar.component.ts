import { 
  Component, 
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core'; 
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';


/*import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { 
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar/modules/calendar.module';

const colors: any = {
  red: {
    primary: '#AD2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1E90FF',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#E3BC08',
    secondary: '#FDF1BA'
  }
};*/

@Component({
  selector: 'app-appointment-calandar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment-calandar.component.html',
  styleUrls: ['./appointment-calandar.component.scss']
})
export class AppointmentCalandarComponent implements OnInit {

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
