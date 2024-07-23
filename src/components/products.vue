<template>
    <h1>Confectionery</h1>
     <p>{{total}}</p>
     
    
    <div>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in stock" :key=product>
              
        <v-card
   
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{product.itemName}}</v-card-title>

      
    </v-card-item>

            <div class="text-grey ms-4">
          {{product.itemPrice}}
        </div>
      
         

    <v-divider class="mx-4 mb-1"></v-divider>

       
    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Add to Cart"
        block
        border
        @click="addToCart(product)"
        
      ></v-btn>
    </v-card-actions>
  </v-card>
       </v-col>
       </v-row>
    
    </div>
    
    </template>
    <script>
      import { mapActions, mapGetters } from 'vuex'
    export default {
    data(){
        return{
            products:[1,2,3,4,5,6,7,8,9,10,],

            stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../public/images/nico-smit-PTv-B97DHNI-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            }
            
      ],
      total: 0,
      cartItems:[],
      





            }
                
                
                    
        },
    
    methods:{
      calculateTotal(itemPrice){
        this.total += itemPrice

      },
      addToCart(product){
        this.cartItems.push(product)
        this.calculateTotal(product.itemPrice)
        
      },
      removeFromCart(product){
        this.cartItems.pop(product)
        this.total -= product.itemPrice
      }

    },
    computed: {
      ...mapGetters({
        stock: 'stock'
      })
    }
    }
    
    </script>