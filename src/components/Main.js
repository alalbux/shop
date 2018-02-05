import React from 'react';
import ProductAPI from './Api';
import Product  from './Product';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Button from './Button';
import Modal from './Modal';

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      products: ProductAPI,
      
      modalProduct: {
        product: {},
        visible: false
      },

      cart: {
        products: [],
        visible: false
      }
    }

    this.handleModal = this.handleModal.bind(this)
    this.addProductCart = this.addProductCart.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.removeProductCart = this.removeProductCart.bind(this)
  }

  handleModal (product) {
    const { modalProduct } = this.state

    this.setState({
      modalProduct: {
        product,
        visible: !modalProduct.visible
      }
    })
  }

  addProductCart (product) {
    const { cart, modalProduct } = this.state
    product = {...product}

    this.setState({
      cart: {
        products: [...cart.products, product]
      },
      modalProduct: {
        ...modalProduct,
        visible: false
      }
    })
  }

  toggleVisibility () {
    const { cart } = this.state

    this.setState({
      cart: {
        ...cart,
        visible: !cart.visible
      }
    })
  }
  
  closeModal () {
    const { modalProduct } = this.state

    this.setState({
      modalProduct: {
        ...modalProduct,
        visible: false
      }
    })
  }
  
  removeProductCart (productId) {
        const { cart } = this.state

        this.setState({
          cart: {
            ...cart,
            products: cart.products.filter(product => product.id !== productId)
          }
        })
    }

  render () {
    const { cart, products, modalProduct } = this.state
    
    return (      
      <main>
        <div className="products">
          {
            products.all().map(product => (
                <Product
                  key={product.name}
                  product={product}
                  onClick={() => this.handleModal(product)}
                />
            ))
          }
        </div>
        {modalProduct.visible &&
          <Modal visible={modalProduct.visible}>
            <Product product={modalProduct.product}>
              <button className="close" onClick={this.closeModal}>&times;</button>
              <div className="info">
              {
                ProductAPI.get(modalProduct.product.id).map(p => (
                    <ProductDetails
                      product={p}
                    />
                ))
              }
              </div>
              <Button onClick={() => this.addProductCart(modalProduct.product)}>Comprar</Button>
            </Product>
          </Modal>
        }
          <Cart
            products={cart.products}
          />
        </main>
    )
  }
}

export default Main
