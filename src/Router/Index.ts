import { createRouter, createWebHistory } from 'vue-router';
import DashboardProfile from '@/views/DashboardProfile.vue';
import DashboardTeam from '@/views/DashboardTeam.vue';
import DashboardProject from '@/views/DashboardProject.vue';
import DashboardConnection from '@/views/DashboardConnection.vue';


const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: DashboardProfile
  },
  {
    path: '/team',
    name: 'Team',
    component: DashboardTeam
  },
  {
    path: '/projects',
    name: 'Projects',
    component: DashboardProject
  },
  {
    path: '/connections',
    name: 'Connections',
    component: DashboardConnection
  },
  {
    path: '/',
    redirect: '/profile' // Ruta por defecto
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
