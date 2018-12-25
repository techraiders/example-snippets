import { ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class AppComponent implements OnInit {
  @ViewChild('f') signupForm : NgForm;
  
  ngOnInit () {
    /*
      this.signupForm.setValue({
        userData: {
          username: 'suggestedname'
          email: ''
        },
        gender: 'male',
        secret: ''
      });
    */
  
    this.signupForm.form.patchValue({
      userData: {
        username: 'suggestedName'
      }
    });
  }
  
}
