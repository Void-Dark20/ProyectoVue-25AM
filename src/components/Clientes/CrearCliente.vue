<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar cliente</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="clientes.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del cliente</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                name="apellidos"
                id="apellidos"
                v-model="clientes.apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa los apellidos del cliente</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="clientes.telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el telefono del cliente</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                v-model="clientes.email"
                aria-describedby="helpId"
                id="emamil"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del articulo</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Dirección:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                v-model="clientes.direccion"
                aria-describedby="helpId"
                id="direccion"
                placeholder="Dirección"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la dirección del cliente</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
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
        clientes: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.clientes);
  
        var cuerpo = {
          nombre: this.clientes.nombre,
          apellidos: this.clientes.apellidos,
          telefono: this.clientes.telefono,
          email: this.clientes.email, 
          direccion: this.clientes.direccion
        };
  
        axios.post('https://localhost:7294/Cliente', cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/listar";
      }
    }
  }
  </script>