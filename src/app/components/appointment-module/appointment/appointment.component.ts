import { 
  Component, 
  OnInit,
} from '@angular/core';  
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  
  constructor(
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
      this.appointmentService.getAppointments().subscribe((res) => {
        console.log(res)
      })
  }
}
