import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    message: new FormControl(''),
  })

  onSubmit() {
    this.firestore.collection('Users').add({
      Name: this.form.value.name,
      Email: this.form.value.email,
      Company: this.form.value.company,
      Message: this.form.value.message,
    })
      .then(res => {
        console.log(res);
        this.form.reset();
      })
      .catch(e => {
        console.log(e);
      })

    // //using Twilio SendGrid's v3 Node.js Library

    // //https://github.com/sendgrid/sendgrid-nodejs

    // const sgMail = require('@sendgrid/mail');

    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // const msg = {

    //   to: 'bestercharl1999@gmai.com',

    //   from: this.form.value.email,

    //   subject: this.form.value.company + ' Sent you a message',

    //   text: this.form.value.message,

    // };

    // sgMail.send(msg);
  }

  actionFunction() {
    this.onSubmit()
  }
  ngOnInit(): void { }
}
