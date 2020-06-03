import React, { Component } from "react";
const ProductContext = react.CreateContext();
//Provider
//Consumer
class productProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
