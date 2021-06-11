import { Component, OnInit } from '@angular/core';

import { FormularioService } from '../../servicios/formulario.service'

@Component({
  selector: 'app-listar-datos-formulario',
  templateUrl: './listar-datos-formulario.page.html',
  styleUrls: ['./listar-datos-formulario.page.scss'],
})
export class ListarDatosFormularioPage implements OnInit {

  datos_obtenidos;
  constructor(private formularioServicie: FormularioService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obtenerDatosFormulario();
  }

  obtenerDatosFormulario(){

    this.formularioServicie.obtenerRegistroFormulario().subscribe(
      (response:any) => {
        this.datos_obtenidos = response.registros;
      },
      error => {
        alert("Error ")
      }
    )
  }

}
