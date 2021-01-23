import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactRecordComponent } from '../contact-record/contact-record.component';
import { ContactRecords } from '../contact-records';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  obj: ContactRecords[] = [];
  
  constructor(public contactrecord:ContactRecordComponent,private fb: FormBuilder, public dialogRef: MatDialogRef<ContactRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [], public dialog: MatDialog) { this.obj = this.data;}



  name = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  wplace = new FormControl('', []);
  contact = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);


  ngOnInit() {
  }

  
  Onsubmit() {
    console.log(this.name.value)
    console.log(this.lname.value)
    console.log(this.wplace.value)
    console.log(this.contact.value)
    console.log(this.email.value)
  var obj = {
      name: this.name,
      lname: this.lname,
      email: this.email,
      contact: this.contact,
      wplace: this.wplace,
    }
    console.log(obj)
  }
  addContact() {
    if (this.obj.length >= 4)
    for(var i=0; i <this.obj.length; i++){
      if(this.obj[i].id === 4){
        this.contactrecord.idForContact++;break;
  }
}
this.obj.push(
  {
    id: this.contactrecord.idForContact,
    name: this.name.value,
    lname: this.lname.value,
    contact: this.contact.value,
    wplace: this.wplace.value,
    email: this.email.value
  })
  var tableobject = this.obj;
  console.log(this.contactrecord.idForContact)
  localStorage.setItem("my_records", JSON.stringify(tableobject));
  var storedcontacts = JSON.parse(localStorage.getItem("my_records"));
  console.log(storedcontacts)
  this.contactrecord.idForContact = this.obj[this.obj.length-1].id;
  console.log(this.obj)
}

}