<template>
    <div>
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Roles</div>
  
        <div class="butt-fun">|
        <router-link :to="{ name: 'CrearRol' }" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Crear rol</router-link>|
        <router-link :to="{ name: 'Dashboard' }" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar</router-link>|
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th style="font-weight: bold;">pkRol</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rol in Roles" :key="rol.pkRol">
                <td>{{ rol.pkRol }}</td>
                <td>{{ rol.nombre }}</td>
                <td>
                    <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarRol(rol.pkRol)" class="btn btn-warning">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
                  </div>
                  <div class="btn-group" role="label" aria-label="">
                    |<button type="button" v-on:click="borrarRol(rol.pkRol)"  class="btn btn-danger">
                      <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>  
                  </div>
                </td>           
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  
  .card .card-header{
    text-align: center;
    background: rgb(79, 85, 79);
  }
  
  .card .butt-fun{
    margin: 5px;
  }
  
  
  </style>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Roles: [],
      };
    },
    created: function () {
      this.consultarRol();    
    },
    methods: {
        consultarRol(){
        axios.get("https://localhost:7294/Rol").then((result) => {
          console.log(result.data.result);
          this.Roles = result.data.result;
        });
      },
      borrarRol(pkRol) {
        console.log(pkRol);
  
        axios.delete("https://localhost:7294/Rol?id=" + pkRol);
  
        window.location.href = "ListarRol";
      },
      editarRol(pkRol){
        console.log(pkRol);
        this.$router.push("/editar/" + pkRol)
      },
   },
  };
  </script>