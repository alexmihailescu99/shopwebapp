import React from "react";
import axios from "axios";
import smartphoneImg from "../samsung.jpg";
import {Card, Button} from "react-bootstrap";
import {GridList, GridListTile} from "@material-ui/core";
let styles = {
    marginRight: '20px',
    width: '25rem',
    height:'35rem',
    marginBottom:'5rem',
    border:"0"
};
const ProductProp = props => {
    if (props.product.name.startsWith("samsung")) {

    }
    return (
    <Card style={styles}>
        <Card.Img variant="top" src={smartphoneImg} />
        <Card.Body>
            <Card.Title>{props.product.title} ({props.product.price}$)</Card.Title>
            <Card.Text>{props.product.description}</Card.Text>
            <Button  variant="primary" onClick={() => {}}> Purchase </Button>
            <Button className="float-right" variant="danger" onClick={() => {props.deleteProduct(props.product)}}>Delete</Button>
            
        </Card.Body>
        <hr></hr>
    </Card>
    );
}


export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.setSort = this.setSort.bind(this);
        this.state = {
            products : {},
            sort: 0
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
              // Refresh page
              window.location.reload();
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
        return Array.from(this.state.products);
    }

    setSort(sortOrder) {
        this.setState({
            sort: sortOrder
        })
        let array = Array.from(this.state.products);
        if (!this.setState) array.sort((a, b) => (a.price > b.price) ? 1 : -1);
        else array.sort((a, b) => (a.price > b.price) ? -1 : 1);  
        this.setState({
            products: array
        })
       // window.location.reload();
    } 
    render() {
        let productArray = this.productList();
        return (
          <div>
            <h3>Products</h3>
            <h3>Sort by price : <a href="" onClick={() => {this.setSort(0)}}>asc</a> | <a href="" onClick={() => {this.setSort(1)}}>desc</a></h3>
            <GridList cols={3}>
        {
            productArray.map(currentProduct => {
                return (
                <GridListTile style={styles}>
                    <ProductProp product={currentProduct} editProduct={this.editProduct} deleteProduct={this.deleteProduct}/>
                </GridListTile>
                )
            })
        }
        </GridList>
   
          </div>
        )
      }
}