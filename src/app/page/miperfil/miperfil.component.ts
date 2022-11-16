import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { Turnos } from 'src/app/models/models.module';
import { AuthenticateService } from 'src/app/servicios/authenticate.service';
import { DataService } from 'src/app/servicios/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  rol: string = '';
  nombre: string = '';
  apellido: string = '';
  img1: string = '';
  edad: string = '';
  email: string = '';
  obraSocial: string = '';
  dni: string = '';
  usuario: any;
  especialidades: any;
  especialidadSeleccionada: string;
  turnos: Array<Turnos>;
  fechaAct: Date; 

  constructor(private data: DataService, private auth: AuthenticateService, private toast: ToastrService) { }

  ngOnInit(): void {

    this.rol = localStorage.getItem('perfil');
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
    this.img1 = localStorage.getItem('img1');
    this.edad = localStorage.getItem('edad');
    this.email = localStorage.getItem('email');
    this.obraSocial = localStorage.getItem('obraSocial');
    this.dni = localStorage.getItem('dni');

    // if (this.rol == 'admin') {
    //   this.img1 == "../../../assets/login.png";
    // }

    var uid = '0';
    this.auth
      .getUserUid()
      .then((res) => {
        uid = res.toString();
        this.data.getUserByUid(uid).subscribe((res) => {
          this.usuario = res;
        });
      })
      .catch((res) => {
        uid = res.toString();
        console.log('Sin Usuario');
      });

    this.data.getEspecialidades().subscribe(a => {
      this.especialidades = a;
      console.log(a)
    });

    this.fechaAct = new Date();
    this.fechaAct = this.parserFecha(this.fechaAct);
  }

  parserFecha(fecha:Date)
  {
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let anio = fecha.getFullYear() ;
  //  let feche = dia + "-" + mes + "-" + anio;
    let feche;
     feche = anio + "-" + mes + "-" + dia;
    
    return feche;

  }

  toPDF() {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/jpg')
      let PDF = new jsPDF('p', 'mm', 'a4');
      var width = PDF.internal.pageSize.getWidth();
      var height = PDF.internal.pageSize.getHeight();
      
      PDF.addImage(FILEURI, "JPG",0,0, fileWidth, fileHeight)
      console.log("Fecha act: ", this.fechaAct);
      PDF.save(`turnos-${this.especialidadSeleccionada}.pdf`);
    });

  }

  async onChange(event) {
    try {
      this.turnos = await this.data.getTurnosPaciente(this.usuario.uid, event);
      console.log(this.turnos);
    } catch (err) {
      console.log(err);
    }
  }

}
