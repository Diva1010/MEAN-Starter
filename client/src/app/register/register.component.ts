import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm  } from '@angular/forms';
import { userservice } from '../services/userservice';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  dob = new FormControl('');


  constructor(public userservice : userservice, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit(form: NgForm){
    this.userservice.register(form.value).subscribe(data => {
      if(data.username){
        let config = new MatSnackBarConfig();
        config.verticalPosition = 'top';
        config.horizontalPosition = 'center';
        config.duration = 4000;
        this.snackBar.open('Registration Successfully Completed!', '', config); 
        form.resetForm();
      }
    })
  }

}

