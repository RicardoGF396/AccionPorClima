import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }
  
  openSM(contenido: any){
    this.modal.open(contenido,{centered:true, size: 'xl'});
  }

  /* EXPERIMENTO 
  openSM(contenido: any){
    var test = document.querySelectorAll('.MO');
    for(var i=0;i<test.length;i++){
      var ide = test[i].id;
      alert("El id del boton es: " + test[i].id);
    }
    this.modal.open(contenido,{centered:true, size: 'xl'});
  }*/

}
