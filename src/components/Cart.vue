<template>
    <h1>Cart</h1>
    <v-card
         class="mx-auto"
         width="1300"
         >
         <v-card-text class="bg-surface-light pt-4">
          <v-card-tittle>Cart
            {{total}}
            <v-btn
            color="deep-purple-lighten-2"
            text="checkout"
            ></v-btn>

          </v-card-tittle>
          <v-row>
            <v-col cols="12" md="3"  v-for="product in cartItems" :key=product>
                  
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
          
    
          <div>{{product.description}}</div>
        
    
        <v-divider class="mx-4 mb-1"></v-divider>
    
           
        <v-card-actions>
          <v-btn
            color="deep-purple-lighten-2"
            text="remove"
            block
            border
            @click="removeFromCart(product)"
            
          ></v-btn>
        </v-card-actions>
      </v-card>
           </v-col>
           </v-row>
         </v-card-text>
      </v-card>   

    
    </template>
    
        <script>
import { mapActions, mapGetters } from 'vuex'

export default {
    
    data(){
        return{

        }
    },
    methods: {
        
    },
    computed: {
        ...mapGetters({
            cartItems: ''
        })
    }
}
</script>
    
    
    
    
    