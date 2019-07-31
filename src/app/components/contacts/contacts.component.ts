import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcontactsComponent } from '../addcontacts/addcontacts.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddcontactsComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
