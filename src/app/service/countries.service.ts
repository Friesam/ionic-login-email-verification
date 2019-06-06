import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../register/country'
import { States} from '../register/states'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

    getCountries(){
        return [
            new Country(2, 'Canada', 'CA'),
            new Country(1, 'United States', 'US')
          ]
    }

    getStates() {
        return [
            new States(1, 1, 'Alabama', 'AL'),
            new States(2, 1, 'Alaska', 'AK'),
            new States(3, 1, 'American Samoa', 'AS'),
            new States(4, 1, 'Arizona', 'AZ'),
            new States(5, 1, 'Alaska', 'AK'),
            new States(6, 1, 'Arkansas', 'AR'),
            new States(7, 1, 'California', 'CA'),
            new States(8, 1, 'Colorado', 'CO'),
            new States(9, 1, 'Connecticut', 'CT'),
            new States(10, 1, 'Delaware', 'DE'),
            new States(11, 1, 'District Of Columbia', 'DC'),
            new States(12, 1, 'Federated States Of Micronesia', 'FM'),
            new States(13, 1, 'Florida', 'FL'),
            new States(14, 1, 'Georgia', 'GA'),
            new States(15, 1, 'Guam', 'GU'),
            new States(16, 1, 'Hawaii', 'HI'),
            new States(17, 1, 'Idaho', 'ID'),
            new States(18, 1, 'Illinois', 'IL'),
            new States(19, 1, 'Indiana', 'IN'),
            new States(20, 1, 'Iowa', 'IA'),
            new States(21, 1, 'Kansas', 'KS'),
            new States(22, 1, 'Kentucky', 'KY'),
            new States(23, 1, 'Louisiana', 'LA'),
            new States(24, 1, 'Maine', 'ME'),
            new States(25, 1, 'Marshall Islands', 'MH'),
            new States(26, 1, 'Maryland', 'MD'),
            new States(27, 1, 'Massachusetts', 'MA'),
            new States(28, 1, 'Michigan', 'MA'),
            new States(29, 1, 'Minnesota', 'MN'),
            new States(30, 1, 'Mississippi', 'MS'),
            new States(31, 1, 'Missouri', 'MO'),
            new States(32, 1, 'Montana', 'MT'),
            new States(33, 1, 'Nebraska', 'NE'),
            new States(34, 1, 'Nevada', 'NV'),
            new States(35, 1, 'New Hampshire', 'NH'),
            new States(36, 1, 'New Jersey', 'NJ'),
            new States(37, 1, 'New Mexico', 'NM'),
            new States(38, 1, 'New York', 'NY'),
            new States(40, 1, 'North Carolina', 'NC'),
            new States(41, 1, 'North Dakota', 'ND'),
            new States(42, 1, 'Northern Mariana Islands', 'MP'),
            new States(43, 1, 'Ohio', 'OH'),
            new States(44, 1, 'Oklahoma', 'OK'),
            new States(45, 1, 'Oergon', 'OR'),
            new States(46, 1, 'Palau', 'PW'),
            new States(47, 1, 'Pennsylvania', 'PA'),
            new States(48, 1, 'Puerto Rico', 'PR'),
            new States(49, 1, 'Rhode Island', 'RI'),
            new States(50, 1, 'South Carolina', 'SC'),
            new States(51, 1, 'Tennesse', 'TN'),
            new States(52, 1, 'Texas', 'TX'),
            new States(53, 1, 'Utah', 'UT'),
            new States(54, 1, 'Vermont', 'VT'),
            new States(55, 1, 'Virgin Islands', 'VI'),
            new States(56, 1, 'Virginia', 'VA'),
            new States(57, 1, 'Washington', 'WA'),
            new States(58, 1, 'West Virginia', 'WV'),
            new States(59, 1, 'Wisconsin', 'WI'),
            new States(60, 1, 'Wyoming', 'WY'),
            new States(61, 2, 'Alberta', 'AB'),
            new States(62, 2, 'Bristish Columbia', 'BC'),
            new States(63, 2, 'Manitoba', 'MB'),
            new States(64, 2, 'New Brunswick', 'NB'),
            new States(65, 2, 'Newfoundland ad Labrador', 'NL'),
            new States(66, 2, 'Northwest Terrioties', 'NT'),
            new States(67, 2, 'Nova Scotia', 'NS'),
            new States(68, 2, 'Nunavut', 'NU'),
            new States(69, 2, 'Ontario', 'ON'),
            new States(70, 2, 'Prince Edward Island', 'PE'),
            new States(71, 2, 'Quebec', 'QC'),        
            new States(72, 2, 'Saskatchewan', 'SK'),
            new States(73, 2, 'Yukon Territory', 'YT')
        ]
        
    }

}