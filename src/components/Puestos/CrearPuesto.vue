<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar puesto</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="puestos.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre del puesto"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del puesto</small
              >
            </div>
            <br />
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'ListarPuesto' }" class="btn btn-danger"
                >Cancelar</router-link>|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
 <style>
 .card-header{
  text-align: center;
  color: black;
  background: rgb(69, 66, 71);
 }


 </style>

  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        puestos: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.puestos);
  
        var cuerpo = {
          nombre: this.puestos.nombre,
        };
  
        axios.post("https://localhost:7294/Puesto", cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/ListarPuesto";
      }
    }
  }
  </script>