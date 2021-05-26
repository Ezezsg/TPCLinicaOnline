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
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+\\s*$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'El correo electronico es requerido.' },
      { type: 'pattern', message: 'Introduzca un correo electrónico válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es requerida.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres.' }
    ]
  };

  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.router.navigate(['']);
      }, err => {
        this.errorMessage = 'No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario.'; 
      })
  }

  goToRegisterPage() {
    this.router.navigate(['/Registro']);
  }

  // UserValido(usuario){
  //   switch(usuario){
  //     case "admin":{
  //       this.validations_form = this.formBuilder.group({
  //         email: ["admin@admin.com"],
  //         password: ["111111"]
  //       });
  //     break;
  //     }
  //     case "invitado":{
  //       this.validations_form = this.formBuilder.group({
  //         email: ["invitado@invitado.com"],
  //         password: ["222222"]
  //       });
  //     break;
  //     }  
  //     case "usuario":{
  //       this.validations_form = this.formBuilder.group({
  //         email: ["usuario@usuario.com"],
  //         password: ["555555"]
  //       });
  //     break;
  //     }
  //     case "anonimo":{
  //       this.validations_form = this.formBuilder.group({
  //         email: ["anonimo@anonimo.com"],
  //         password: ["444444"]
  //       });
  //     break;
  //     }
  //     case "tester":{
  //       this.validations_form = this.formBuilder.group({
  //         email: ["tester@tester.com"],
  //         password: ["555555"]
  //       });
  //     break;
  //     }
  //   }
  // }

}
