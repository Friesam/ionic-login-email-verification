import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLogin} from './UserLogin.interface'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


  constructor() { }


    userLogin = new FormGroup({
        username: new FormControl('', Validators.required),
        account: new FormGroup({
          password: new FormControl('',Validators.required),
          confirmPwd: new FormControl('', Validators.required)
        })
        
    });
  

  onSubmit({value, valid}: {value:UserLogin, valid: boolean}){
    console.log(value, valid)
  }
}
