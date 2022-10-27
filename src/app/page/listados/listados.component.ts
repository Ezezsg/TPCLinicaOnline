import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../servicios/authenticate.service';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {

  public yo: any = {};
	public panel = null;

	constructor(public auth: AuthenticateService) {}
	ngOnInit(): void {
		this.inicializar();
	}

	async inicializar() {
		await this.auth.getUsuario(JSON.parse(localStorage.getItem('user')).uid).then(ref => {
			this.yo = ref.data();
		});
	}
}
