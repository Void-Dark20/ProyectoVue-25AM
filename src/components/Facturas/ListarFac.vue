<template>
    <div>
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Facturas</div>
  
        <div class="butt-fun">|
        <router-link :to="{ name: 'CrearFac' }" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Crear factura</router-link>|
        <router-link :to="{ name: 'Dashboard' }" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar</router-link>|
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th style="font-weight: bold;">pkFactura</th>
                <th style="font-weight: bold;">RazonSocial</th>
                <th style="font-weight: bold;">Fecha</th>
                <th style="font-weight: bold;">RFC</th>
                <th style="font-weight: bold;">FkCliente</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="factura in Facturas" :key="factura.pkFactora">
                <td>{{ factura.pkFactora }}</td>
                <td>{{ factura.razonSocial }}</td>
                <td>{{ factura.fecha }}</td>
                <td>{{ factura.rfc }}</td>
                <td>{{ factura.fkCliente }}</td>
                <td>
                    <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarFac(factura.pkFactora)" class="btn btn-warning">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
                  </div>
                  <div class="btn-group" role="label" aria-label="">
                    |<button type="button" v-on:click="borrarFac(factura.pkFactora)"  class="btn btn-danger">
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
        Facturas: [],
      };
    },
    created: function () {
      this.consultarFac();    
    },
    methods: {
        consultarFac(){
        axios.get("https://localhost:7294/Factura").then((result) => {
          console.log(result.data.result);
          this.Facturas = result.data.result;
        });
      },
      borrarFac(pkFactora) {
        console.log(pkFactora);
  
        axios.delete("https://localhost:7294/Factura?id=" + pkFactora);
  
        window.location.href = "ListarFac";
      },
      editarFac(pkFactora){
        console.log(pkFactora);
        this.$router.push("/editar/" + pkFactora)
      },
   },
  };
  </script>