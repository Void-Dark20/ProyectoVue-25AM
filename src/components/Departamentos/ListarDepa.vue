<template>
    <div>
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Departamentos</div>
  
        <div class="butt-fun">|
        <router-link :to="{ name: 'CrearDepa' }" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Crear departamento</router-link>|
        <router-link :to="{ name: 'Dashboard' }" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar</router-link>|
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th style="font-weight: bold;">pkDepartamento</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="departamento in Departamentos" :key="departamento.pkDepartamento">
                <td>{{ departamento.pkDepartamento }}</td>
                <td>{{ departamento.nombre }}</td>
                <td>
                    <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarDepa(departamento.pkDepartamento)" class="btn btn-warning">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
                  </div>
                  <div class="btn-group" role="label" aria-label="">
                    |<button type="button" v-on:click="borrarDepa(departamento.pkDepartamento)"  class="btn btn-danger">
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
        Departamentos: [],
      };
    },
    created: function () {
      this.consultarDepa();    
    },
    methods: {
      consultarDepa() {
        axios.get("https://localhost:7294/Departamento").then((result) => {
          console.log(result.data.result);
          this.Departamentos = result.data.result;
        });
      },
      borrarDepa(pkDepartamento) {
        console.log(pkDepartamento);
  
        axios.delete("https://localhost:7294/Departamento?id=" + pkDepartamento);
  
        window.location.href = "ListarDepa";
      },
      editarDepa(pkDepartamento){
        console.log(pkDepartamento);
        this.$router.push("/editar/" + pkDepartamento)
      },
   },
  };
  </script>