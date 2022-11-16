import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/models/models.module';
import { EstadisticasService } from 'src/app/servicios/estadisticas.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  log: Array<Logger>
  estadisticas: Array<any> = null;

  constructor(private stats: EstadisticasService) { }

  ngOnInit(): void {
    this.stats.getLogger()
      .then(data => this.log = data)
      .finally(() => console.log(this.log));

    this.stats.getStats().then((a: any) => this.estadisticas = a)
  }

  toPDF() {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/jpg')
      let PDF = new jsPDF('l', 'mm', 'a4');
      var width = PDF.internal.pageSize.getWidth();
      var height = PDF.internal.pageSize.getHeight();
      
      PDF.addImage(FILEURI, "JPG",5,0, width, height)
      PDF.save(`estadisticas.pdf`);
    });

  }

}
