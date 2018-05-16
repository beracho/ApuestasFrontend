import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/bets',
    children: [
      {
        path: 'bets',
        name: 'Mis Apuestas',
        component: Dashboard
      },
      {
        path: 'table',
        name: 'Lista de apuestas',
        component: TableList
      },
      {
        path: 'user',
        name: 'Perfil de Usuario',
        component: UserProfile
      },
      {
        path: 'login',
        name: 'Inicio de Sesión',
        component: Login
      },
      {
        path: 'register',
        name: 'Registrese',
        component: Register
      }
    ]
  }
]

export default routes
