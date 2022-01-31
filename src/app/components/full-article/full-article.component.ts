import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
 
  public respuesta:any;

  constructor( private route:ActivatedRoute ,private RestService:RestService){

  }
  ngOnInit():void{
   this.route.paramMap.subscribe((paramMap:any)=>{
    const{params}=paramMap
    this.loadData(params.variable);
    
   })
  }

  loadData(nombreart:string){
     this.RestService.get(`http://localhost:3000/articulos/${nombreart}`).subscribe(answer=>{
     this.respuesta=answer;
   })
  }
}
