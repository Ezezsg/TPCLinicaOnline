import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../../servicios/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = ''; 

  constructor(
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  

}
