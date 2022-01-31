import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit  {
  public listArticle:any=[]

  constructor(private RestService:RestService){

  }
  ngOnInit():void{
  this.loadData();//Iniciamos el metodo
  }
  //Cargar el contenido de la api
  public loadData(){
      this.RestService.get(`http://localhost:3000/articulos`).subscribe(answer=>{
      this.listArticle=answer;
    })
  }
  

}
