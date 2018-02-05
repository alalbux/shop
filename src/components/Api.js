import Products from '../products.json';

const Api = {
    products: Products,
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.id === id
        return this.products.find(isProduct)
    }
  }

console.log(Api.all());

export default Api
  