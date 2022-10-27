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

  public loginForm = new FormGroup({
		email: new FormControl(''),
		pass: new FormControl('')
	});
	public error: boolean;
	public mensajeError: string;
	public submit= false;
	public usuarioSelect: any = null;
	public selectUsuarios:any = [
		{email:'hekoha6519@abudat.com'  ,clave:'111111', tipo:'Paciente' },
		{email:'admin@admin.com'  ,clave:'admin1', tipo:'Administrador' },
	]

	constructor(private auth: AuthenticateService, private router: Router) {
	}
	ngOnInit(): void {
	}

	public seleccionarUsuario(usuario) {
		this.loginForm.controls.email.setValue(usuario.email);
		this.loginForm.controls.pass.setValue(usuario.clave);
	}

	public tryLogin(value) {
		this.submit=true;
		this.auth.login(value).then(() => {
			this.error = false;
			this.router.navigate(["Principal"]);
		}).catch(err => {
			this.submit=false;
			switch (err) {
				case "auth/invalid-email":
					this.mensajeError = 'este email no es valido';
					break;
				case "auth/user-disabled":
					this.mensajeError = 'este usario no esta habilitado';
					break;
				case "auth/user-not-found":
					this.mensajeError = 'no existe este usuario';
					break;
				case "auth/wrong-password":
					this.mensajeError = 'contraseña incorrecta';
					break;
				default:
					this.mensajeError = err;
			}
			this.error = true;
			setTimeout(()=>{
			this.error = false;
			},5000);
		});
	}

  

}
