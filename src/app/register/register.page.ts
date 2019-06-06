import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CountriesService} from '../service/countries.service'
import { Country } from './country';
import { States } from './states';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [CountriesService]
})
export class RegisterPage {
  selectedCountry: Country= new Country(2, 'Canada', 'CA');
  countries: Country[]
  states: States[]
  
  constructor(private fb: FormBuilder,
    public _countriesList: CountriesService) {
      this.countries = this._countriesList.getCountries()
     }


  registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    confirm_email: new FormGroup({
      email: new FormControl ('', Validators.compose([Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      confirmemail: new FormControl('', Validators.required)
    }),
    city: ['', Validators.required],
    province: [this.states, Validators.required],
    countries: [this.countries, Validators.required]

  })


  validation_messages = {
    'firstname': [
     { type: 'required', message: 'First name is required.' }
    ],
    'lastname': [
      { type:'required', message: 'Last name is required'}
    ],
    'email': [
      {type: 'required', message: "Email os required"},
      {type: 'pattern', message: "Your email is incorrect "}
    ],
    'confirmemail': [
      { type: 'requires ', message: "Confirm your email"}
    ],
    'confirm_email': [
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'city': [
     { type: 'required', message: 'City is required.' },
  
    ],
    'province': [
     { type: 'required', message: 'Province is required' }
   ],
   'countries': [
     { type: 'required', message: 'Country is required' }
   ]
  }
  onSelect(countryid) {
    this.states = this._countriesList.getStates().filter((item)=> item.countryid == countryid);
    console.log(this.selectedCountry)
  }
  
  
}
