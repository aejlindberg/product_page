import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")


class App extends React.Component {



  render() {
    return (
      <div className="App">
      <h1>Produkter</h1>
        <div className="productContainer">
          {productsJson.products.map((product) => {
            return <Product name={product.name.toUpperCase()}
            image={product.image}
            type={product.type}
            substance={product.substance}
            size={product.size}
            numberInPack={product.numberInPack}
            price={product.price}
            delivery={product.deliveryTime}/>
          }
          )}
        </div>
      </div>
    )
  }

}

export default App
