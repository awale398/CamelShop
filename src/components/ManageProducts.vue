<template>
    <h1>Manage Products</h1>
    <v-btn @click="add_dialog = true" >Add a Product</v-btn>
    <!-- Add Products section -->
    <v-dialog v-model="add_dialog" width="auto" >
        <v-card class="mx-auto my-12" >
            <v-card-item>
                <v-card-title>Add New Product <v-btn @click="add_dialog = false" >X</v-btn></v-card-title>
            </v-card-item>

            <v-card-text>
                <v-form v-model="valid">
                    <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="newProduct.productName" label="Item Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productPrice" label="Product Price" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productDescription" label="Description" hide-details required ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="newProduct.productCategory"
                                :items="productCategoryItems"
                                item-title="categoryName"
                                item-value="categoryID"
                                label="Category"
                                
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-select
                                v-model="newProduct.productMeasurement"
                                :items="productMeasurementList"
                                
                                label="Measurement"
                                
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productImagePath" label="Image" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productNumber" label="Stock Number" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productQuantity" label="Quantity" hide-details required ></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-form>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-actions>
                <v-btn color="deep-purple-lighten-2" text="Save" block border @click="save()" ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- List of products -->
    <v-card class="mx-auto my-12" >
        <v-card-item>
            <v-card-title>Candy Shop Products</v-card-title>
            <v-table>
                <thead>
                <tr>
                    <th class="text-left">
                    Name
                    </th>
                    <th class="text-left">
                    Price
                    </th>
                    <th class="text-left">
                    Quantity
                    </th>
                    <th class="text-left">
                    Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in stock"
                    :key="item.id"
                >
                    <td>{{ item.productName }}</td>
                    <td>{{ item.productPrice }}</td>
                    <td>{{ item.productQuantity }}</td>
                    <td><v-btn @click="editProduct(item)" >Show</v-btn></td>
                </tr>
                </tbody>
            </v-table>
        </v-card-item>
    </v-card>
    <!-- Show Product -->
    <v-dialog v-model="show_dialog" width="auto" >
        <v-card class="mx-auto my-12" max-width="374">
            <v-card-title>View Product
                <v-btn class="ms-auto" text="Edit" @click="edit_dialog = true" ></v-btn>
            </v-card-title>
            <v-img
                height="250"
                :src="editProductItems.productImagePath"
                cover
            ></v-img>

            <v-card-item>
                <v-card-title>{{editProductItems.productName}}</v-card-title>
            </v-card-item>

            <v-card-text>
                <div>{{ editProductItems.productDescription }}</div>
                <div class="my-4 text-subtitle-1">
                    Price: {{editProductItems.productPrice}} 
                    Quantity in stock: {{editProductItems.productQuantity}}
                    Stock Number: {{editProductItems.productNumber}}
                </div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-actions>
            <v-btn class="ms-auto" text="close" @click="show_dialog = false" ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- Edit Product -->
    <v-dialog
      v-model="edit_dialog"
      width="auto"
    >
        <v-card class="mx-auto my-12" width="700">
            <v-card-item>
                <v-card-title>Edit Product
                <v-btn class="ms-auto" text="X" @click="edit_dialog = false" ></v-btn>

                </v-card-title>
            </v-card-item>

            <v-card-text>
                <v-form v-model="valid_edit">
                    <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="editProductItems.productName" label="name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="editProductItems.productPrice" label="Product Price" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="editProductItems.productDescription" label="Description" hide-details required ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="editProductItems.productCategory"
                                :items="productCategoryItems"
                                item-title="categoryName"
                                item-value="categoryID"
                                label="Category"
                                
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-select
                                v-model="editProductItems.productMeasurement"
                                :items="productMeasurementList"
                                
                                label="Measurement"
                                
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="editProductItems.productImagePath" label="Image" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="editProductItems.productNumber" label="Stock Number" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="editProductItems.productQuantity" label="Quantity" hide-details required ></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-form>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-actions>
                <v-btn color="deep-purple-lighten-2" text="Save" @click="update()" ></v-btn>
                <v-btn class="ms-auto" text="Cancel" @click="edit_dialog = false" ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import axios  from "axios";
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data(){
            return{
                valid: true,
                valid_edit: true,
                add_dialog: false,
                show_dialog: false,
                edit_dialog: false,
                newProduct: {
                    productNumber: null,
                    productName: null,
                    productPrice: null,
                    productDescription: null,
                    productCategory: 1 ,
                    productMeasurement: 'grams',
                    productImagePath: null,
                    productQuantity: null
                },
                editProductItems: {
                    productNumber: null,
                    productName: null,
                    productPrice: null,
                    productDescription: null,
                    productCategory: 1 ,
                    productMeasurement: 'grams',
                    productImagePath: null,
                    productQuantity: null
                },
                productCategoryItems: [
                    { categoryName: 'Sweets', categoryID: 1 },
                    { categoryName: 'Chocolates', categoryID: 2 },
                    { categoryName: 'Crisps', categoryID: 3 },
                    { categoryName: 'Biscuits', categoryID: 4 },
                    { categoryName: 'Soda', categoryID: 5 },
                ],
                productMeasurementList:['grams', 'ml' ]
            }
        },
        methods:{
            ...mapActions([
                "fetchProducts" // action to trigger fetching products from api
            ]),
            //create new products
            save(){
                try {
                    axios
                    .post('http://127.0.0.1:8000/api/products', this.newProduct)
                    .then((response) => console.log(response))
                    this.fetchProducts()
                    this.add_dialog = false

                } catch (error) {
                    alert(error);
                    console.log(error);
                }
            },

            //update products
            //Step 1: update the current state of products object in the data section
            editProduct(product){
                this.editProductItems.id = product.id
                this.editProductItems.productNumber = product.productNumber
                this.editProductItems.productName = product.productName
                this.editProductItems.productPrice = product.productPrice
                this.editProductItems.productDescription =product.productDescription
                this.editProductItems.productCategory = product.productCategory
                this.editProductItems.productMeasurement = product.productMeasurement
                this.editProductItems.productImagePath = product.productImagePath
                this.editProductItems.productQuantity = product.productQuantity
                
                //open the dialog (pop-up) to display the view and edit form
                this.show_dialog = true
            },

            //Step 2: send the updated products object in state to the backend
            update(){
                try {
                    axios
                    .put('http://127.0.0.1:8000/api/products/' + this.editProductItems.id, this.editProductItems)
                    .then((response) => console.log(response))
                    this.fetchProducts()
                    this.edit_dialog = false

                } catch (error) {
                    alert(error);
                    console.log(error);
                }
            }

        },
        computed: {
            ...mapGetters({
                stock: 'stock'
            })
        },
        created() {
            this.fetchProducts() // retrieve the products when the component is called
        }
    }
</script>