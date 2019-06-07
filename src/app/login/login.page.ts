import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserLogin} from './UserLogin.interface'; 
import { NavController } from '@ionic/angular';
import { PasswordValidator } from './validators/password.validator'
import { Tab1Page} from '../tab1/tab1.page'
import { UsernameValidator } from './validators/username.validator'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // userLogin: FormGroup
  // matching_password_grp: FormGroup

  ngOnInit(){
    // this.matching_password_grp = new FormGroup({
    //   password: new FormControl('',
    //   Validators.compose([
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    //   ])),
    //   confirmPwd: new FormControl('', Validators.required)
    // }, 
    // (formGroup: FormGroup) => {
    //   return PasswordValidator.areEqual(formGroup);
    // });
    
    // this.userLogin = this.fb.group({
    //   username: new FormControl('', Validators.compose([
    //     Validators.maxLength(25),
    //     Validators.minLength(5),
    //     Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    //     UsernameValidator.validUsername,
    //     Validators.required
    //   ]),
    //     matching_password: this.matching_password_grp
        

    // })
  }
 
  constructor(public fb : FormBuilder, public router: Router, public authService : AuthService) { }

    onSubmit(values){
      // this.navCtrl.push(Tab1Page)\
      console.log("successful")
    }

    toTeamDetails() {
      this.router.navigateByUrl(`/tab1`)
  }

  toRegisterTeam() {
    this.router.navigateByUrl(`/register`)
  }


}
