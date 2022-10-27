import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  public db = firebase.firestore();
	public sub = [];
	constructor(private firestore: AngularFirestore) { }

	contarNotificacionesNoLeidas(usuario) {
		return this.firestore.collection('notificaciones', ref => ref.where('leido', '==', false).where('destinatario','==',usuario)).snapshotChanges();

	}

}
