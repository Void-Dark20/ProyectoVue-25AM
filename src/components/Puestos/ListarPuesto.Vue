<template>
    <div>
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Puestos</div>
  
        <div class="butt-fun">|
        <router-link :to="{ name: 'CrearPuesto' }" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Crear puesto</router-link>|
        <router-link :to="{ name: 'Dashboard' }" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar</router-link>|
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th style="font-weight: bold;">pkPuesto</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puesto in Puestos" :key="puesto.pkPuesto">
                <td>{{ puesto.pkPuesto }}</td>
                <td>{{ puesto.nombre }}</td>
                <td>
                    <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarPuesto(puesto.pkPuesto)" class="btn btn-warning">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
                  </div>
                  <div class="btn-group" role="label" aria-label="">
                    |<button type="button" v-on:click="borrarPuesto(puesto.pkPuesto)"  class="btn btn-danger">
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
        Puestos: [],
      };
    },
    created: function () {
      this.consultarPt();    
    },
    methods: {
        consultarPt(){
        axios.get("https://localhost:7294/Puesto").then((result) => {
          console.log(result.data.result);
          this.Puestos = result.data.result;
        });
      },
      borrarPuesto(pkPuesto) {
        console.log(pkPuesto);
  
        axios.delete("https://localhost:7294/Puesto?id=" + pkPuesto);
  
        window.location.href = "ListarPuesto";
      },
      editarPuesto(pkPuesto){
        console.log(pkPuesto);
        this.$router.push("/editar/" + pkPuesto)
      },
   },
  };
  </script>