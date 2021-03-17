import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerationForm = new FormGroup({
    userName : new FormControl('Mani'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
       city : new FormControl(''),
       state : new FormControl(''),
       pincode : new FormControl('')
    })
  }); 
}
