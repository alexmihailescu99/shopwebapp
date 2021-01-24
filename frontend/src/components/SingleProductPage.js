import React from "react";
import axios from "axios";
import { Redirect } from 'react-router'
export default class SingleProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
            description: "",
            price: 0,
            type: "",
            details: "",
            image: null,
        };
        this.renderObject = this.renderObject.bind(this);
    }

    componentDidMount() {
        let link = "http://localhost:8080/product/" + this.props.match.params.name;
        axios.get(link)
        .then(res => {
            this.setState({
                name: res.data.name,
                title: res.data.title,
                description: res.data.description,
                price: res.data.price,
                type: res.data.type,
                details: res.data.details,
                image: require('../static/img/' + res.data.name + '.jpg').default,
            })
            //alert('../static/img/' + this.state.name + '.jpg')
        })
        .catch(err => {
          //alert(err.response.status);
            if (err.response.status === 401) {
              window.location.href="/login";
            } else if (err.response.status === 403) {
              window.location.href="/notAuthorized";
            }
            // Redirect to home page & don't render page with broken info

        });
    }

    renderObject() {
        return (
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-10">
                <div className="card-header">
                  <nav className="header-navigation">
                    <a href="/" className="btn btn-link">Back to the list</a>
                    <div className="btn-group">
                      <a href="#" className="btn btn-link btn-share">Share</a>
                      <a href="#" className="btn btn-link">Sell item like this</a>
                    </div>
                  </nav>
                </div>
                <div className="card-body store-body">
                  <div className="product-info">
                    <div className="product-gallery">
                      <div className="product-gallery-thumbnails">
                      </div>
                      <div className="product-gallery-featured">
                      <div className="view zoom overlay  mb-3 mb-md-0">
                <img className="img-fluid  productImg"
                  src={this.state.image} alt="Sample"/>
                <a href="#!">
                  <div className="mask waves-effect waves-light">
                    <img className="img-fluid  productImg"
                      src={this.state.image}/>
                    <div className="mask  waves-effect waves-light"></div>
                  </div>
                </a>
              </div>
                      </div>
                    </div>
                    <div className="product-seller-recommended">
                      <div className="product-description mb-5">
                        <h2 className="mb-5">Features</h2>
                        <dl className="row mb-5">
                          <dt className="col-sm-3">Brand</dt>
                          <dd className="col-sm-9">Nickony</dd>
                          <dt className="col-sm-3">Color</dt>
                          <dd className="col-sm-9">Red</dd>
                          <dt className="col-sm-3">Size</dt>
                          <dd className="col-sm-9">XXL</dd>
                          <dt className="col-sm-3">Fabric</dt>
                          <dd className="col-sm-9">Cottom</dd>
                        </dl>
                        <h2 className="mb-5">Description</h2>
                        <p>{this.state.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-payment-details">
                    <p className="last-sold text-muted"><small>145 items left in stock</small></p>
                    <h4 className="product-title mb-2">{this.state.title + " " + this.state.details}</h4>
                    <h2 className="product-price display-4">$ {this.state.price}.00</h2>
                    <p className="text-success"><i className="fa fa-credit-card"></i> Up to 12 installments</p>
                    <p className="mb-0"><i className="fa fa-truck"></i> 2-day delivery anywhere in RO</p>
                    <div className="text-muted mb-2"><small>Find out more about delivery time and shipping forms</small></div>
                    <label for="quant">Quantity</label>
                    <input type="number" name="quantity" min="1" id="quant" className="form-control mb-5 input-lg" placeholder="Choose the quantity"/>
                    <button className="btn btn-primary btn-lg btn-block">Buy Now</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
    }

    render() {
       return this.renderObject();
    }
}