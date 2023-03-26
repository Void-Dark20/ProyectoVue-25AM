<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar factura</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Razón social:</label>
              <input
                type="text"
                class="form-control"
                name="razonSocial"
                v-model="facturas.razonSocial"
                aria-describedby="helpId"
                id="razonSocial"
                placeholder="Nombre la empresa"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del empresa</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Fecha:</label>
              <input
                type="text"
                class="form-control"
                name="fecha"
                id="fecha"
                v-model="facturas.fecha"
                aria-describedby="helpId"
                placeholder="DD/MM/AAAA"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="rfc"
                id="rfc"
                v-model="facturas.rfc"
                aria-describedby="helpId"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la RFC de la empresa</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">FkCliente:</label>
              <input
                type="text"
                class="form-control"
                name="fkCliente"
                id="fkCliente"
                v-model="facturas.fkCliente"
                aria-describedby="helpId"
                placeholder="FkCliente"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la FkCliente</small
              >
            </div>
            <br />
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'ListarFac' }" class="btn btn-danger"
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
        facturas: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.facturas);
  
        var cuerpo = {
          razonSocial: this.facturas.razonSocial,
          fecha: this.facturas.fecha,
          rfc: this.facturas.rfc,
          fkCliente: this.facturas.fkCliente,
        };
  
        axios.post("https://localhost:7294/Factura", cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/ListarFac";
      }
    }
  }
  </script>