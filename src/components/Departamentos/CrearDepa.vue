<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="departamentos.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre del departamento"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <br />
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'ListarDepa' }" class="btn btn-danger"
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
        departamentos: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.departamentos);
  
        var cuerpo = {
          nombre: this.departamentos.nombre,
        };
  
        axios.post("https://localhost:7294/Departamento", cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/ListarDepa";
      }
    }
  }
  </script>