<template>
    <h1>NavBar</h1>
    <v-app-bar :elevation="2" color="orange">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon> 
  </template>

  <v-app-bar-title>CANDY CRUSH</v-app-bar-title>
  <v-btn to="/">Home</v-btn>

<v-btn to="/Products">Products</v-btn>
<v-btn to="/Aboutus">AboutUs</v-btn>
<v-btn to="/Contacts">ContactUs</v-btn>
<v-btn to="/Cart">Cart</v-btn>
<v-btn to="/Services">Services</v-btn>


</v-app-bar>
</template>
<script>
export default {

} 
</script>

    

