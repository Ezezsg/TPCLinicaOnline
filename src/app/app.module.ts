import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { environment } from '../environments/environment';

import { AuthenticateService } from './servicios/authenticate.service';

import { HomeComponent } from './page/home/home.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
