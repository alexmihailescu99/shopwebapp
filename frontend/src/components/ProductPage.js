import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const ProductProp = props => (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.title}</td>
      <td>{props.product.description}</td>
      <td>{props.product.price}</td>
      <td>
      <a href="#" onClick={() => {props.editProduct(props.product)}}>edit</a> | <a href="#" onClick={() => {props.deleteProduct(props.product)}}>delete</a>
    </td>
    </tr>
  )

class Product {
    constructor(id, name, title, description, price) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.price = price;
    }
    id;
    name;
    title;
    description;
    price;
}
export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.state = {
            products : {}
        }
    }

    editProduct(product) {
        axios.post("http://localhost:8080/product/add", {
            name: product.name + " ma ta",
            title: product.title,
            description: product.description,
            price: product.price
          })
          .then(res => {
              alert(res.data);
          }).catch(err => {
              alert (err);
          })
    }

    deleteProduct(product) {
        axios.delete("http://localhost:8080/product/delete/" + product.name)
          .then(res => {
              alert(res.data);
          }).catch(err => {
              alert (err);
          })
    }
    componentDidMount() {
        axios.get("http://localhost:8080/product/")
            .then(res => {
                this.setState({
                    products : res.data
                })
            })
            .catch(err => {
                alert(err);
            });
    }

    productList() {
        return Array.from(this.state.products).map(currentProduct => {
            return <ProductProp product={currentProduct} editProduct={this.editProduct} deleteProduct={this.deleteProduct}/>;
        })
    }
    render() {
        return (
          <div>
            <h3>Products</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                { this.productList() }
              </tbody>
            </table>
          </div>
        )
      }
}