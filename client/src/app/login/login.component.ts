import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm  } from '@angular/forms';
import { userservice } from '../services/userservice'
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  submitted = false;
  
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  
  constructor(public userservice : userservice, private router: Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
    this.submitted = true;
    let config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 4000;
    this.userservice.login(form.value).subscribe(data => {
      if(data.status == 401){
        this.snackBar.open('Wrong Username / Password', '', config); 
      }
      else{
        this.router.navigate(['/home']);
      }
    })
  }

}
