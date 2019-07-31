import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent {

  constructor(
    public dialogRef: MatDialogRef<AddcontactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
