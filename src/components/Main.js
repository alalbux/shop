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
    this.checkout = this.checkout.bind(this);
    this.addCart = this.addCart.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.removeCart = this.removeCart.bind(this)
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

  addCart (product) {
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

  checkout (amount) {
    amount = Math.round(amount * 100)

    const checkout = new window.PagarMeCheckout.Checkout({
      encryption_key: 'teste',
      success: transaction => {
        console.log(transaction);
      }
    })

    checkout.open({
      amount,
      buttonText: 'Pagar',
      customerData: 'true',
      paymentMethods: 'credit_card',
      maxInstallments: 12,
      uiColor: '#444444',
      createToken: 'true',
      interestRate: 12,
      freeInstallments: 12,
      defaultInstallment: 5,
      headerText: 'Finalizar compra.'
    })
  }
 
  
  removeCart (productId) {
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
                <h4>Detalhes do Album</h4>
                <ul className="details">
                    {
                      modalProduct.product.details.map(p => (
                          <li>
                            <ProductDetails
                            key={p.name}
                            product={p}
                          />
                          </li>
                      ))
                    }
                </ul>
              </div>
            <div className="compra">
               <Button onClick={() => this.addCart(modalProduct.product)}>Comprar</Button>
            </div>
            </Product>
          </Modal>
        }
          <Cart
            products={cart.products}
            remove={this.removeCart}
          />
        </main>
    )
  }
}

export default Main
