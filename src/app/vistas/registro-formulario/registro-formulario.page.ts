import { Component, OnInit } from '@angular/core';

//importar servicio 
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos{
  constructor(
    public campo1,
    public campo2,
  ){}
}

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.page.html',
  styleUrls: ['./registro-formulario.page.scss'],
})
export class RegistroFormularioPage implements OnInit {

  datos_formulario;
  constructor(private formularioServicie: FormularioService ) { 
    this.datos_formulario = new EnviarDatos("Ingrese dato 1", "Ingrese dato 2");
  }

  ngOnInit() {
  }

  enviarDatos(){
    this.formularioServicie.registrarFormulario(this.datos_formulario).subscribe(
      (response:any)=>{
        if(response.registro){
          alert("Datos guardados exitosamente");
        }else{
          alert("Datos no registrados")
        }
      },
      error=>{
        alert("error al registrar")
      }
    )





    console.log("Datosa del formulario: ", this.datos_formulario)
  }

}
