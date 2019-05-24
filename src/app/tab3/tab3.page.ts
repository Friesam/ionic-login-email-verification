import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor() {}
  profileForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('',Validators.required),
    address: new FormGroup(
      {
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
      }
    )
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
