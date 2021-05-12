import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // constructor(private firestore: AngularFirestore) { }

  // form = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   company: new FormControl(''),
  //   message: new FormControl(''),
  // })

  // onSubmit() {
  //   this.firestore.collection('Users').add({
  //     Name: this.form.value.name,
  //     Email: this.form.value.email,
  //     Company: this.form.value.company,
  //     Message: this.form.value.message,
  //   })
  //     .then(res => {
  //       console.log(res);
  //       this.form.reset();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     })
  // }

  // actionFunction() {
  //   this.onSubmit()
  // }
  // ngOnInit(): void { }

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        company:['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message:['', Validators.required],
      },
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success

    this.firestore.collection('Users').add({
          Name: this.registerForm.value.firstName,
          Email: this.registerForm.value.email,
          Company: this.registerForm.value.company,
          Message: this.registerForm.value.message,
        })
          .then(res => {
            console.log(res);
            this.registerForm.reset();
          })
          .catch(e => {
            console.log(e);
          })
    alert(
      'Message Sent!! :-)'
    );
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
