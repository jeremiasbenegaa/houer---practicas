import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore"
import { IpReloj } from '../modelo/reloj';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  private relojesCollection!:AngularFirestoreCollection<IpReloj>;
  

  constructor(private firestore:AngularFirestore) {


    this.relojesCollection=this.firestore.collection<IpReloj>("relojes")


  }
    //Agregamos un producto a nuestra base de datos//firestore
    
    agregarRelojes(producto:IpReloj){
        

      return new Promise(async(resolve,reject)=>{
      
        
          try{


            //generamos un id automatico y se lo asignamos al producto
            const id = this.firestore.createId();
            producto.id=id;

            const result = await this.relojesCollection.doc(id).set(producto);
            resolve (result);

          } catch (error) {
            reject(error)
          }
      } )   
      
  }
}






