import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../servicios/authenticate.service';
import { EstadisticasService } from '../../servicios/estadisticas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
	emailClass: '';
  claveClass: '';
  email: string;
  clave: string;
  recaptcha: '';
  siteKey: string;
  desa: boolean = false;
  sitekey: string;
  formGroup: FormGroup;

  constructor(private auth: AuthenticateService, private formBuilder: FormBuilder, private stats: EstadisticasService, private route:Router) {
    this.siteKey = '6LfWypAjAAAAACwM1907Ww2YwTnOWRAz-qyMn055'
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  usuarios: Array<any> = [
    { id: 0, nombre: "Administrador", correo: "acba49cd68@inboxmail.life", clave: "111111" },
    { id: 1, nombre: "Paciente", correo: "373dbb63dd@inboxmail.life", clave: "111111" },
    { id: 2, nombre: "Profesional", correo: "2f0868887e@inboxmail.life", clave: "111111" },
    { id: 3, nombre: "Profesional", correo: "a8ab8b1303@inboxmail.life", clave: "111111" },
    { id: 4, nombre: "Paciente", correo: "63e6014cf9@inboxmail.life", clave: "111111" },
    { id: 5, nombre: "Paciente", correo: "6a931c8fab@inboxmail.life", clave: "111111" }
  ]

  onChange(id) {
    console.log("llega");
    console.info(this.usuarios[id].correo);
    this.email = this.usuarios[id].correo;
    this.clave = this.usuarios[id].clave;
  }

  Entrar() {
    if (this.recaptcha != '') {
      this.auth.login(this.email, this.clave).then(res => {
        console.log("se loguea");
        this.stats.logger(this.email);
      }).catch(error => {
        console.log("anda");
      })
    }

  }

  resolved(captchaResponse: any) {
    this.recaptcha = captchaResponse;
    console.log("captcha: " + this.recaptcha);
  }


  Paciente() {
    this.onChange(1);
  }

  Paciente2() {
    this.onChange(4);
  }

  Paciente3() {
    this.onChange(5);
  }

  Medico() {
    this.onChange(2);
  }

  Medico2() {
    this.onChange(3);
  }

  Admin() {
    this.onChange(0);
  }

  bienvenido(){
    this.route.navigate(['/bienvenido']);
  }

  register(){
    this.route.navigate(['/registro']); 
  }
  

}
