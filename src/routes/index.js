import {createRouter, createWebHistory} from 'vue-router'

import homepage from "./../components/homepage.vue"
import products from "./../components/products.vue"                 
import AboutUs from "./../components/AboutUs.vue"
import contacts from "./../components/contacts.vue"
import Cart from "./../components/Cart.vue"
import services from "./../components/services.vue"


const routes = [
    {
      path: '/',
      name: 'home',
      component: homepage,
    },
    {
        path: '/products',
        name: 'Products',
        component: products,
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: contacts,
      },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: '/services',
        name: 'services',
        component: services,
      },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router