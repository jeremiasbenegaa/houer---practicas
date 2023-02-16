import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RelojesComponent } from './components/relojes/relojes.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [

  //Lo que hace es que si me tira error, 
  {path:'',pathMatch:'full',redirectTo:'inicio'},

  {path:"inicio",component:InicioComponent 
  },

  {path:"relojes",component:RelojesComponent 
  },

  {path:"contacto",component:ContactoComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
