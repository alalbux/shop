const ProductAPI = {
  products: [
      { id: '1', name: "Item 1", price: "54.00" },
      { id: '2', name: "Item 2", price: "11.00" },
      { id: '3', name: "Item 3", price: "19.00" },
      { id: '4', name: "Item 4", price: "11.00" },
      { id: '5', name: "Item 5", price: "19.00" },
      { id: '6', name: "Item 6", price: "32.00" },
      { id: '7', name: "Item 7", price: "45.00" },
      { id: '8', name: "Item 8", price: "11.00" },
      { id: '9', name: "Item 9", price: "19.00" },
      { id: '10', name: "Item 10", price: "32.00" },
      { id: '11', name: "Item 11", price: "45.00" },
      { id: '12', name: "Item 12", price: "11.00" },
      { id: '13', name: "Item 13", price: "19.00" },
      { id: '14', name: "Item 14", price: "32.00" },
      { id: '15', name: "Item 15", price: "45.00" },
      { id: '16', name: "Item 16", price: "32.00" },
      { id: '17', name: "Item 17", price: "45.00" },
      { id: '18', name: "Item 18", price: "43.00" }
  ],
  all: function() { return this.products},
  get: function(id) {
      const isProduct = p => p.id === id
      return this.products.find(isProduct)
  }
}
  
export default ProductAPI
