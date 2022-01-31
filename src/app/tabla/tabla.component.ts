import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

   personas:any = [

    {
      nombre: "Julian Restrepo Esquinas",
      ocupacion: "Ing. Ambiental",
      correo: "jrestresq@gmail.com",
      ciudad: "Lima",
      pais: "Perú",
      foto: "../../assets/personas/p1.png"
    },
    {
      nombre: "María Rosa Asensi Llacer",
      ocupacion: "Coordinadora de Pro Natura",
      correo: "pronatura@gmail.com",
      ciudad: "Ciudad de México",
      pais: "México",
      foto: "../../assets/personas/p2.png"
    },
    {
      nombre: "Ana Conejero Alcalde",
      ocupacion: "Subdirectora de FMCN",
      correo: "fmcn@gmail.com",
      ciudad: "Quito",
      pais: "Ecuador",
      foto: "../../assets/personas/p3.png"
    },
    {
      nombre: "Ruben Bernad Fuente",
      ocupacion: "Ing. Agrónomo",
      correo: "rubenbf@gmail.com",
      ciudad: "San Salvador",
      pais: "El Salvador",
      foto: "../../assets/personas/p4.png"
    },
    {
      nombre: "Rosa Arguello Arevalo",
      ocupacion: "Fundadora de Centro Mexicano de Derecho Ambiental",
      correo: "cmda@gmail.com",
      ciudad: "Buenos Aires",
      pais: "Argetina",
      foto: "../../assets/personas/p5.png"
    },
    {
      nombre: "Margarita Herraiz Concepcion",
      ocupacion: "Coordinadora General de Natrulia a.c",
      correo: "natrulia@gmail.com",
      ciudad: "León",
      pais: "México",
      foto: "../../assets/personas/p6.png"
    },
    {
      nombre: "Mercedes Ribera Vicario",
      ocupacion: "Ing. en Bioquímica",
      correo: "mrcedesrvica@gmail.com",
      ciudad: "Querétaro",
      pais: "México",
      foto: "../../assets/personas/p7.png"
    },
    {
      nombre: "Carmen Azcona Gomariz",
      ocupacion: "Directora de FMCN",
      correo: "fmcn@gmail.com",
      ciudad: "Monterrey",
      pais: "México",
      foto: "../../assets/personas/p8.png"
    },
    {
      nombre: "José Teijeiro Cabrian",
      ocupacion: "Ing. Agrícola",
      correo: "rubenbf@gmail.com",
      ciudad: "Barcelona",
      pais: "España",
      foto: "../../assets/personas/p9.png"

    },
    {
      nombre: "Iván Martín Gómez Pintor",
      ocupacion: "Cofundador de Centro Mexicano de Derecho Ambiental",
      correo: "cmda@gmail.com",
      ciudad: "Ciudad de México",
      pais: "México",
      foto: "../../assets/personas/p10.png"
    },

    ]


}
