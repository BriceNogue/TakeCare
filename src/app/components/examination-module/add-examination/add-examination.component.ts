import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientCardModel } from 'src/app/models/pateint_card_model';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss']
})
export class AddExaminationComponent {

  //@Input() patientCard: PatientCardModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<AddExaminationComponent>
  ) { }

  cancel() {
    this.dialogRef.close({data:'your data'});
  }

  confirm() {
    this.dialogRef.close({ data: 'your data'})
  }

}
