const ProductAPI = {
    products: [
      { number: 1, name: "Item 1", price: "54.00" },
      { number: 2, name: "Item 2", price: "11.00" },
      { number: 3, name: "Item 3", price: "19.00" },
      { number: 4, name: "Item 4", price: "32.00" },
      { number: 5, name: "Item 5", price: "45.00" },
      { number: 6, name: "Item 6", price: "43.00" }
    ],
    all: function() { return this.products},
    get: function(id) {
      const isProduct = p => p.number === id
      return this.products.find(isProduct)
    }
  }
  
  export default ProductAPI
  