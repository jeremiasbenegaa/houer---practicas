import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/servicio/storage.service';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css']
})
export class RelojesComponent implements OnInit{

  public formularioProducto:FormGroup
  constructor(private fb: FormBuilder, private relojesService:StorageService) {


    this.formularioProducto=this.fb.group({
      nombre:['a', Validators.required],
      precio:['', Validators.required],
      descripcion:['',Validators.required],
      url:['',Validators.required]
    })
   }


  ngOnInit(): void{

  }

  guardarProducto(){
    if(this.formularioProducto.invalid){
      //llevar los datos a la base de datos
      this.relojesService.agregarRelojes(this.formularioProducto.value).then((producto)=>{
        alert('Producto agregado con exito!')
        this.formularioProducto.reset;
      })
    }
    else{
      alert('El formulario es invalido!')
    }
    
  }

}
















