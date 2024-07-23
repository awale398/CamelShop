const state = {
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
  allproducts:[]


}
const getters = {
    stock: (state) => state.allProducts,

}
const actions = {
	async fetchProducts({ commit }) {
		try {
		  const data = await axios.get(
			"http://127.0.0.1:8000/api/products"
		  );
		  commit("SET_PRODUCTS", data.data);
		} catch (error) {
		  alert(error);
		  console.log(error);
		}
	  },

}
const mutations = {
	SET_PRODUCTS (state, allProducts) {
		state.allProducts = allProducts //modify the all products state
	}
}

    


export default {
    state,
    getters,
    actions,
    mutations
    



}