import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserLogin} from './UserLogin.interface'; 
import { NavController } from '@ionic/angular';
import { PasswordValidator } from './validators/password.validator'
import { Tab1Page} from '../tab1/tab1.page'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  userLogin: FormGroup;
  //account: FormGroup;

  constructor(public fb : FormBuilder, public navCtrl: NavController) { 
  
  }
  // account= new FormGroup({
  //   password: new FormControl('',
  //   Validators.compose([
  //     Validators.required,
  //     Validators.minLength(5),
  //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  //   ])),
  //   confirmPwd: new FormControl('', Validators.required)
  // }, (formGroup: FormGroup) => {
  //   return PasswordValidator.areEqual(formGroup);
  // })

OnInit(){

  this.userLogin= new FormGroup({
    username: new FormControl(''),
    matching_passwords: new FormGroup({
      password: new FormControl(''),
      confirmPwd: new FormControl('')
    })
  })
  
  this.userLogin= this.fb.group({
    username: ['', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.required
    ])],
    matching_passwords: this.fb.group({
      password: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      confirmPwd: ['', Validators.required]
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    }),

  })

}
     Validation_messages = {
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

  // getUsername() { return this.userLogin.get('username')}
  // gePassword() { return this.userLogin.get('password')}
  // getConfirmPwd() { return this.userLogin.get('confirmPwd')}
  
  // onSubmit(userLogin  ) {
  //   console.warn(this.userLogin.value);
  // }

  // onSubmit(password, confirmPwd){
  //   console.log(value, valid)
  // }
}
