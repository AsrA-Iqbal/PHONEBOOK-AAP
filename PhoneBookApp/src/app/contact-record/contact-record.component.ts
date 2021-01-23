import { Component, OnInit } from '@angular/core';
import { ContactRecords } from '../contact-records';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';



var ELEMENT_DATA: ContactRecords[] = [
  { id: 1, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 2, name: 'Afshan', lname: 'Jabeen', contact: '03112662205', wplace: 'Counceler', email: 'afshan_councelersa@yahoo.com' },
  { id: 3, name: 'Nadeem', lname: 'Akhter', contact: '0333445556', wplace: 'Samref Frim', email: 'nadeen_akhter@yahoo.com' },
  { id: 4, name: 'Usama', lname: 'Shahid', contact: '8735378289', wplace: 'Banker', email: 'usama_shahid@gmail.com' },
  { id: 5, name: 'Imtiaz', lname: 'Akhter', contact: '1111111111', wplace: 'Archtitect', email: 'Akhter_imt@yahoo.com' }
]

@Component({
  selector: 'app-contact-record',
  templateUrl: './contact-record.component.html',
  styleUrls: ['./contact-record.component.scss']
})
export class ContactRecordComponent implements OnInit {

  idForContact: number = 5;
  data:any
  tablerecords: any;

  displayedColumns: string[] = ['id', 'name', 'lname', 'contact', 'wplace', 'email', 'action']
  dataSource = ELEMENT_DATA;
  constructor(private dialog: MatDialog) { }



  
  opendialog() {
    var dialogRef = this.dialog.open(AddContactComponent, {
      width: "100%",
      height: "50%",
      data: this.dataSource,
    });
    dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');

    });
  }

  
  deleteRecord(items) {
    console.log(items)
      this.data =items
    this.dataSource = this.dataSource.filter(table => table !== items);
    this.tablerecords = JSON.parse(localStorage.getItem('my_records'));
    console.log(this.tablerecords)
    for (var i = 0; i < this.tablerecords.length; ++i) {
      if (this.tablerecords[i].id === items.id) {
        this.tablerecords.splice(i, 1);
        console.log(this.tablerecords)
      }
      this.idForContact = 5;
      localStorage.setItem("my_records", JSON.stringify(this.tablerecords))
    }

  }

  ngOnInit() {
    this.dataSource = JSON.parse(localStorage.getItem('my_records'))
    console.log(this.dataSource);
  }

}
