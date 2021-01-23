import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactRecordComponent } from '../contact-record/contact-record.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ContactRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [], public dialog: MatDialog) { }



  name = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  wplace = new FormControl('', []);
  contact = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  ngOnInit() {
  }

}
