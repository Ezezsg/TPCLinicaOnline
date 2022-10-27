import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { AuthenticateService } from 'src/app/servicios/authenticate.service';


@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.css']
})
export class AltaAdminComponent implements OnInit {
  @ViewChild('ngForm', { static: false }) form: NgForm
	public registroForm: FormGroup = new FormGroup({
		nombre: new FormControl('', Validators.required),
		apellido: new FormControl('', Validators.required),
		dni: new FormControl('', [Validators.required, this.validarDNI, Validators.minLength(8)]),
		nacimiento: new FormControl('', Validators.required),
		email: new FormControl(null, Validators.required),
		pass: new FormControl(null, Validators.required),
		rol: new FormControl('Admin'),
		img1: new FormControl('')
	})
	public submit: boolean = false;
	public creado: any = null;
	public mensajeSubmit: String = '';
	public cantImagenes = -1;
	constructor(private auth: AuthenticateService) { }

	ngOnInit(): void {
	}

	fechaHoy() {
		var today: any = new Date();
		var dd: any = today.getDate();
		var mm: any = today.getMonth() + 1;
		var yyyy: any = today.getFullYear() - 18;
		if (dd < 10) {
			dd = '0' + dd.toString();
		}
		if (mm < 10) {
			mm = '0' + mm.toString();
		}
		today = yyyy + '-' + mm + '-' + dd;
		return today;
	}

	agregarImagen(imagen) {
		console.log(imagen);
		
		this.registroForm.patchValue({
				img1: imagen[0]
				
			
		});
		this.cantImagenes = imagen.length;
		
	}

	registrarAdmin(admin) {
		this.submit = true;
		if (admin.valid) {
			this.auth.registerAdmin(admin.value, admin.value.pass).then(() => {
				this.submit = false;
				this.mensajeCreado(true,'el Administrador se pudo crear con exito!');
				this.resetearForm();
			}).catch(err => {
				let error = '';
				switch (err.code) {
					case "auth/email-already-in-use":
						error = 'el email ya esta en uso por otro usuario';
						break;
					case "auth/invalid-email":
						error = 'el email no tiene un formato valido';
						break;
					case "auth/weak-password":
						error = 'la contraseña no es fuerte';
						break;
					case "auth/argument-error":
						error = 'el email o la contraseña no tienen un formato valido';
						break;
					default:
						error = err;
						break;
				}
				this.mensajeCreado(false,error);
			});
		} else {
			this.mensajeCreado(false,'No se creo Correctamente el Administrador');
		}
	}

	resetearForm() {
		let captcha = this.registroForm.value.captcha;
		this.form.resetForm();
		this.submit = false;
		this.registroForm.reset({ rol: 'Admin', captcha:captcha });
	}

	mensajeCreado(valor:boolean, mensaje:String) {
		this.creado = valor;
		this.mensajeSubmit = mensaje
		setTimeout(() => {
			this.creado = null;
		}, 3500);
	}

	validarDNI(control: AbstractControl)
 	{
   		const dni = control.value;
   		const estaMal = parseInt(dni);
   		console.log(estaMal);
   		if (!estaMal)
   		{
     		return {estaMal:true};
   		}
   	return null;
 	}

}
