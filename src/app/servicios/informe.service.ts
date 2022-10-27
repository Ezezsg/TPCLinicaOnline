import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Horario } from '../clases/horario';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  public db = firebase.firestore();
	public sub = [];
	constructor(private firestore: AngularFirestore) { }

	guardarLogUsuario(usuario) {
		this.db.collection('logs_usuarios').add({
			fecha: Date.now(),
			usuario: usuario.email,
			rol: usuario.rol
		});
	}

	guardarLogOperaciones(turno, operacion) {
		this.db.collection('logs_operaciones').add({
			fecha: Date.now(),
			profesional: turno.profesional,
			especialidad: turno.especialidad,
			operacion: operacion
		});
	}

	traerLogsUsuario() {
		return this.db.collection('logs_usuarios').get();
	}

	traerLogsOperaciones() {
		return this.db.collection('logs_operaciones').get();
	}

	primerLoginFecha(listaLogs, usuario) {
		return listaLogs.find(log => log.usuario === usuario).fecha;
	}

	async informeProfesionalesInicioSesion(desde, hasta) {
		let data: Array<any> = [];
		await this.db.collection('logs_usuarios').where('rol', '==', 'Profesional').get().then(value => {
			data = value.docs.map(doc => {return { ...doc.data() };}).filter(doc => (doc.fecha >= desde && doc.fecha <= hasta));
		});
		data.sort((x, y) => {
			return x.fecha - y.fecha;
		});
		console.log(data);
		let result: Array<any> = Array.from(new Set(data.map((x => x.usuario))));
		let final: any = [];
		result.forEach(usuario => {
			let name = usuario;
			let dataAux: Array<any> = [];
			data.forEach(doc => {
				if (doc.usuario === usuario) {
					let x: Array<any> = [usuario, doc.fecha];
					dataAux.push(x);
				}
			});
			let y: any = { name: name, data: dataAux };
			final.push(y);
		});
		return final;
	}

	
}
