import { Component, OnInit } from '@angular/core';

export class EnviarDatos{
  constructor(
    public dato1,
    public dato2,
  ){}
}

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.page.html',
  styleUrls: ['./registro-formulario.page.scss'],
})
export class RegistroFormularioPage implements OnInit {

  datos_formulario;
  constructor() { 
    this.datos_formulario = new EnviarDatos("Ingrese dato 1", "Ingrese dato 2");
  }

  ngOnInit() {
  }

  enviarDatos(){
    console.log("Datosa del formulario: ", this.datos_formulario)
  }

}
