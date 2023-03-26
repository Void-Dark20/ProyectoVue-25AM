import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/Dashboard.vue'
//Clientes
import ListarCliente from '../components/Clientes/ListarCliente.vue'
import CrearCliente from '../components/Clientes/CrearCliente.vue'
import EditarCliente from '../components/Clientes/EditarCliente.vue'
//Departamentos
import ListarDepa from '../components/Departamentos/ListarDepa.vue'
import CrearDepa from '../components/Departamentos/CrearDepa.vue'
//Puestos
import ListarPuesto from '../components/Puestos/ListarPuesto.vue'
import CrearPuesto from '../components/Puestos/CrearPuesto.vue'
//Roles
import ListarRol from '../components/Roles/ListarRol.vue'
import CrearRol from '../components/Roles/CrearRol.vue'
//Facturas
import ListarFac from '../components/Facturas/ListarFac.vue'
import CrearFac from '../components/Facturas/CrearFac.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarCliente
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearCliente
    },
    {
      path: '/editar/:pkCliente',
      name: 'editar',
      component: EditarCliente
    },
    {
      path: '/ListarDepa',
      name: 'ListarDepa',
      component: ListarDepa
    },
    {
      path: '/CrearDepa',
      name: 'CrearDepa',
      component: CrearDepa
    },
    {
      path: '/listarPuesto',
      name: 'ListarPuesto',
      component: ListarPuesto
    },
    {
      path: '/crearPuesto',
      name: 'CrearPuesto',
      component: CrearPuesto
    },
    {
      path: '/listarRol',
      name: 'ListarRol',
      component: ListarRol
    },
    {
      path: '/crearRol',
      name: 'CrearRol',
      component: CrearRol
    },
    {
      path: '/listarFac',
      name: 'ListarFac',
      component: ListarFac
    },
    {
      path: '/crearFac',
      name: 'CrearFac',
      component: CrearFac
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dashboard.vue')
    }
  ]
})

export default router
