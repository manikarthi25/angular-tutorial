import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordValidator } from './Custom-Validators/password-validators';
import { forbiddenNameValidator } from './Custom-Validators/user-name-validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registerationForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private registerService : RegisterService) {}

  get userName() {
      return this.registerationForm.get('userName');
  }

  get email() {
    return this.registerationForm.get('email');
}

  ngOnInit() {
    this.registerationForm = this.formBuilder.group({
      userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      password : [''],
      email : [''],
      subscribe : [false],
      confirmPassword : [''],
      address : this.formBuilder.group({
         city : [''],
         state : [''],
         pincode : ['']
      })
    }, {validator: passwordValidator});

    this.registerationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registerationForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }
  
  /*registerationForm = new FormGroup({
    userName : new FormControl('Mani'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
       city : new FormControl(''),
       state : new FormControl(''),
       pincode : new FormControl('')
    })
  }); */

  loadAPIData() {
    this.registerationForm.setValue({
      userName : 'kannan',
      password : 'mani',
      confirmPassword : 'mani',
      email : 'mani@gmail.com',
      subscribe : false,
      address : {
         city : 'Coimabatore',
         state : 'Tamilnadu',
         pincode : '111111'
      }
    })
  }

  onSubmit() {
    return this.registerService.register(this.registerationForm.value)
    .subscribe(
      response => console.log("Success", response),
      error => console.error("Error", error)
    );

  }
 }
