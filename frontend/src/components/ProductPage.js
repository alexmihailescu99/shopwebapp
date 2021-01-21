import React from "react";
import axios from "axios";
import samsungImg from "../static/img/samsung.jpg";
import appleImg from "../static/img/apple.jpg";
import huaweiImg from "../static/img/huawei.jpg";
import onePlusImg from "../static/img/oneplus.jpg";
import sonyImg from "../static/img/sony.jpg";
import lgImg from "../static/img/lg.jpg";
import asusImg from "../static/img/asus.jpg";
import macbookImg from "../static/img/macbook.jpg";
import razerImg from "../static/img/razer.jpg";
import ps5Img from "../static/img/ps5.jpg"
import xsxImg from "../static/img/xsx.jpg"
import {Card, Button} from "react-bootstrap";
import {GridList, GridListTile} from "@material-ui/core";

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

let styles = {
    marginRight: '21px',
    width: '25rem',
    height:'35rem',
    marginBottom:'5rem',
    border:"0"
};
const ProductProp = props => {
    let productName = props.product.name;
    let x;
    if (productName.startsWith("samsung")) {
        x = samsungImg;
    } else if (productName.startsWith("apple")) {
        x = appleImg;
    } else if (productName.startsWith("huawei")) {
        x = huaweiImg;
    } else if (productName.startsWith("oneplus")) {
        x = onePlusImg;
    }
    else if (productName.startsWith("lg")) {
        x = lgImg;
    }
    else if (productName.startsWith("sony")) {
        x = sonyImg;
    }
    else if (productName.startsWith("asus")) {
        x = asusImg;
    }
    else if (productName.startsWith("mac")) {
        x = macbookImg;
    }
    else if (productName.startsWith("razer")) {
        x = razerImg;
    }
    else if (productName.startsWith("ps5")) {
        x = ps5Img;
    }
    else if (productName.startsWith("xsx")) {
        x = xsxImg;
    }
    return (
    <Card style={styles}>
        <Card.Img variant="top" src={x} />
        <Card.Body>
            <Card.Title>{props.product.title} (${props.product.price})</Card.Title>
            <Card.Text>{props.product.description}</Card.Text>
            <Button variant="primary" onClick={() => {}}> Purchase </Button>
            <Button className="float-right" variant="danger" onClick={() => {props.deleteProduct(props.product)}}>Delete</Button>
            <Button className="float-right" variant="warning" onClick={() => {props.editProduct(props.product.name)}}> Edit </Button>
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

    editProduct(productName) {
        this.props.history.push('/' + this.props.type + "s/edit/" + productName);
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
                // Filter the array by type(smartphone, laptop etc)
                // Would've probably been better to do this on the backend via custom queries
                // But this works too and I'm too lazy atm
                let array = (this.props.type === "electronic") ? Array.from(res.data) : Array.from(res.data).filter(element => element.type === this.props.type);
                this.setState({
                    products : array
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
            <h3>{capitalizeFirstLetter(this.props.type) + "s"}</h3>
            <h3>Sort by price : <a href="" onClick={() => {this.setSort(0)}}>ascending</a> | <a href="" onClick={() => {this.setSort(1)}}>descending</a></h3>
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