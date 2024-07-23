
<script>

  export default {

    data() {

      return {

          image: 'public/Images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',

          url: 'https://www.vuejs.org/',

          stockDetails : [

              {

                  itemNumber: 1,

                  itemName : "Sweets",

                  itemPrice : 5,

                  itemQuantity : 30,

                  itemImage: 'public/Images/customerbox-aXq1oCCjlVM-unsplash.jpg'

              },

              {

                  itemNumber: 27466,

                  itemName : "Lollipop",

                  itemPrice : 10,

                  itemQuantity : 4,

                  itemImage: 'public/Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'

              },
              
                                                 
              
               

          ],

        }

    },

    methods() {

      // we shall add our functions here

    },
    computed(){

      //we use this when working with forms

    }

  }

</script>

<template>
<v-card>
  class="mx-auto"
  width="1000"
>


  <v-carousel>
    <v-carousel-item
      src="./public/images/lollipop.jpg"
      cover
    ></v-carousel-item>
  
    <v-carousel-item
      src="./public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg"
      cover
    ></v-carousel-item>
  
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</v-card>


<v-card align="center">
  <v-card-item>
   <v-card-title>WELCOME TO camelShop HOME OF CONFECTIONERIES</v-card-title>

   <v-card-subtitle>WE RESPECT YOU AND YOUR NEEDS</v-card-subtitle>
 </v-card-item>

 <v-card-text>
  Welcome to our online candy kiosk, where sweet dreams come true with just a click! 
  Step into a wonderland of sugary delights as you browse through our virtual aisles
   filled with a rainbow of candies from around the world Step into the whimsical world of Sweet
    Delights Candy Shop, where every visit is a journey into sugary bliss. Nestled in the heart of town,
     this charming shop beckons with its vibrant display of candies in every color and flavor imaginable..
 </v-card-text>
62</v-card>
<v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>
<v-row>
  <v-col cols="12" md="4">
    <v-card
      subtitle="FROM MINIAPOLIS AMERICA"
      text="since i came to kenya i have been looking for a brilliant shop as this one, cameshop is the best"
      title="SIHAM ADEN SIAD"
    ></v-card>

    <div class="text-center text-caption">feel free</div>
  </v-col>

  <v-col cols="12" md="4">
    <v-card>
      <template v-slot:title>
        AWALE ADAN SIYAD
      
      </template>

      <template v-slot:subtitle>
        FROM NAIROBI KENYA
      </template>

      <template v-slot:text>
        at first i was reluctant about shopping in it but afterwords i find 
        myself storming in to shop, and wasting all my money in it
      </template>
    </v-card>

    <div class="text-center text-caption">camelShop your home</div>
  </v-col>

  <v-col cols="12" md="4">
    <v-card>
      <v-card-item>
        <v-card-title>DHOLAR AJ EX</v-card-title>

        <v-card-subtitle>FROM BENANE LAGDERA</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        since i have breakenup with cawaleliano , it was hard for me to find a good shop as his but this one is good.
      </v-card-text>
    </v-card>

    <div class="text-center text-caption">home of sweets</div>
  </v-col>
</v-row>
    </template>


