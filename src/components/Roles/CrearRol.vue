<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar rol</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="roles.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre del rol"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del rol</small
              >
            </div>
            <br />
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'ListarRol' }" class="btn btn-danger"
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
        roles: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.roles);
  
        var cuerpo = {
          nombre: this.roles.nombre,
        };
  
        axios.post("https://localhost:7294/Rol", cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/ListarRol";
      }
    }
  }
  </script>