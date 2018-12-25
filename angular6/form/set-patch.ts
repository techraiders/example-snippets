import { ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class AppComponent implements OnInit {
  @ViewChild('f') signupForm : NgForm;
  
  ngOnInit () {
    /* Sets the values of whole form
      this.signupForm.setValue({
        userData: {
          username: 'suggestedname'
          email: ''
        },
        gender: 'male',
        secret: ''
      });
    */
  
    // Overrides part of the form
    this.signupForm.form.patchValue({
      userData: {
        username: 'suggestedName'
      }
    });
  }
  
  resetForm () {
    this.signupForm.reset();
  }
  
}
