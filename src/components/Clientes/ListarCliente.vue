<template>
  <div>
    <div class="card">
      <div class="card-header" style="font-weight: bold; color: white;">Clientes</div>

      <div class="butt-fun">|
      <router-link :to="{ name: 'crear' }" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Crear cliente</router-link>|
      <router-link :to="{ name: 'Dashboard' }" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar</router-link>|
      </div>

      <div class="card_body">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th style="font-weight: bold;">PkCliente</th>
              <th style="font-weight: bold;">Nombre</th>
              <th style="font-weight: bold;">Apellidos</th>
              <th style="font-weight: bold;">Direccion</th>
              <th style="font-weight: bold;">Telefono</th>
              <th style="font-weight: bold;">Email</th>
              <th style="font-weight: bold;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in Clientes" :key="cliente.pkCliente">
              <td>{{ cliente.pkCliente }}</td>
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.apellidos }}</td>
              <td>{{ cliente.telefono }}</td>
              <td>{{ cliente.email }}</td>
              <td>{{ cliente.direccion }}</td>    
              <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarCliente(cliente.pkCliente)" class="btn btn-warning">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
                </div>
                <div class="btn-group" role="label" aria-label="">
                  |<button type="button" v-on:click="borrarCliente(cliente.pkCliente)"  class="btn btn-danger">
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

<!-- <script>
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();
    
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data.result);
        this.clientes = result.data.result;
     

      });
    },
    borrarCliente(id) {
        var pregunta=window.confirm('¿Estás seguro que quiere eliminar el registro ' + id + '?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7294/Cliente?id=" + id);
          window.location.href = "listar";
          
        }else{
          
        }  
  
      }
      
    
  },
};
</script> -->

<script>
import axios from "axios";
export default {
  data() {
    return {
      Clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();    
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data.result);
        this.Clientes = result.data.result;
      });
    },
    borrarCliente(pkCliente) {
      console.log(pkCliente);

      axios.delete("https://localhost:7294/Cliente?id=" + pkCliente);

      window.location.href = "listar";
    },
    editarCliente(pkCliente){
      console.log(pkCliente);
      this.$router.push("/editar/" + pkCliente)
    },
 },
};
</script>