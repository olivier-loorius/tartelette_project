import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import CatalogueView from '@/views/CatalogueView.vue';
import ComposerView from '@/views/ComposerView.vue';
import ActuView from '@/views/ActuView.vue';
import TarteletteDetails from '@/views/TarteletteDetails.vue';
import CGUView from '@/views/CGUView.vue';
import MentionsLegalesView from '@/views/MentionsLegalesView.vue';
import UnderConstructionView from '@/views/UnderConstructionView.vue';
import ContactView from '@/views/ContactView.vue'; // Assurez-vous que ce fichier existe
import AutresView from '@/views/AutresView.vue'; // Assurez-vous que ce fichier existe

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: CatalogueView
  },
  {
    path: '/composer',
    name: 'Composer',
    component: ComposerView
  },
  {
    path: '/actu',
    name: 'Actu',
    component: ActuView
  },
  {
    path: '/details/:id',
    name: 'TarteletteDetails',
    component: TarteletteDetails,
    props: true
  },
  {
    path: '/cgu',
    name: 'CGU',
    component: CGUView
  },
  {
    path: '/mentions-legales',
    name: 'MentionsLegales',
    component: MentionsLegalesView
  },
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: UnderConstructionView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView // Assurez-vous que ce fichier existe
  },
  {
    path: '/autres',
    name: 'Autres',
    component: AutresView // Assurez-vous que ce fichier existe
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
