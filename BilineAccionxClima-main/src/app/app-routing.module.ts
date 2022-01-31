import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { ArticlepageComponent } from './components/articlepage/articlepage.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path: 'galeria',component: GaleriaComponent},

  //RUTA LOS ARTICULOS
  {path:'',component:ArticlepageComponent,pathMatch:'full'},
  {
    path:'articulos/:variable',
    component:FullArticleComponent
  },
  {path:'articulos',component:ArticlepageComponent },
  //RUTA PARA CONTACTO
  {path: 'contacto',component: ContactoComponent},
  {path: 'miembros',component:TablaComponent},
  {path:'**',redirectTo:'articlepage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
