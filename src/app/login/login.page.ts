import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserLogin} from './UserLogin.interface'; 
import { NavController } from '@ionic/angular';
import { PasswordValidator } from './validators/password.validator'
import { Tab1Page} from '../tab1/tab1.page'
import { UsernameValidator } from './validators/username.validator'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  userLogin= this.fb.group({
    username: ['', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      UsernameValidator.validUsername,
      Validators.required
    ])],
    matching_passwords: this.fb.group({
      password: ['',
      Validators.compose([
        Validators.required,
        UsernameValidator.validUsername,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      confirmPwd: ['', Validators.required]
    }, 
    (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    }),

  })
  constructor(public fb : FormBuilder) { }


     validation_messages = {
       'username': [
        { type: 'required', message: 'Username is required.' },
        { type: 'minlength', message: 'Username must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
        { type: 'validUsername', message: 'Your username has already been taken.' }
        
      ],
       'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 5 characters long.' },
        { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
       ],
       'confirmPwd': [
        { type: 'required', message: 'Confirm password is required' }
      ],
      'matching_passwords': [
        { type: 'areEqual', message: 'Password mismatch' }
      ]
     }

     

    onSubmit(values){
      // this.navCtrl.push(Tab1Page)\
      console.log("successful")
    }


}
