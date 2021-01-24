import React from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
let img ="macbookpro16";
let img2 ="appleiphone11";
export default class ShoppingCartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<section>

  <div className="row">

    <div className="col-lg-8">
      <div className="card wish-list mb-3">
        <div className="card-body">

          <h5 className="mb-4">Cart (<span>2</span> items)</h5>

          <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <img className="img-fluid w-100"
                  src={require('../static/img/' + img + '.jpg').default} alt="Sample"/>
                <a href="#!">
                  <div className="mask waves-effect waves-light">
                    <img className="img-fluid w-100"
                      src={require('../static/img/' + img + 'a.jpg').default}/>
                    <div className="mask rgba-black-slight waves-effect waves-light"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>Apple</h5>
                    <p className="mb-3 text-muted text-uppercase small">Macbook Pro 16</p>
                    <p className="mb-2 text-muted text-uppercase small">Color: Space Gray</p>
                    <p className="mb-3 text-muted text-uppercase small">Storage: 512GB</p>
                    <p className="mb-3 text-muted text-uppercase small">Quantity: 1</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                        className="fas fa-trash-alt mr-1"></i> Remove item </a>
                    <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                        className="fas fa-heart mr-1"></i> Move to wish list </a>
                  </div>
                  <p className="mb-0"><span><strong>$17.99</strong></span></p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-4"/>
          <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <img className="img-fluid w-100"
                  src={require('../static/img/' + img2 + '.jpg').default} alt="Sample"/>
                <a href="#!">
                  <div className="mask waves-effect waves-light">
                    <img className="img-fluid w-100"
                      src={require('../static/img/' + img2 + 'a.jpg').default}/>
                    <div className="mask rgba-black-slight waves-effect waves-light"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>Apple</h5>
                    <p className="mb-3 text-muted text-uppercase small">iPhone 11</p>
                    <p className="mb-2 text-muted text-uppercase small">Color: Green</p>
                    <p className="mb-3 text-muted text-uppercase small">Storage: 128GB</p>
                    <p className="mb-3 text-muted text-uppercase small">Quantity: 2</p>
                  </div>
                 
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                        className="fas fa-trash-alt mr-1"></i> Remove item </a>
                    <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                        className="fas fa-heart mr-1"></i> Move to wish list </a>
                  </div>
                  <p className="mb-0"><span><strong>$35.99</strong></span></p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p>

        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">

          <h5 className="mb-4">Expected shipping delivery</h5>

          <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">

          <h5 className="mb-4">We accept</h5>

          <img className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa"/>
          <img className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express"/>
          <img className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard"/>
        </div>
      </div>

    </div>


    <div className="col-lg-4">

      <div className="card mb-3">
        <div className="card-body">

          <h5 className="mb-3">The total amount of</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$25.98</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </li>
          </ul>

          <button type="button" className="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>

        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">

          <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample1"
            aria-expanded="false" aria-controls="collapseExample1">
            Add a discount code (optional)
            <span><i className="fas fa-chevron-down pt-1"></i></span>
          </a>

          <div className="collapse" id="collapseExample1">
            <div className="mt-3">
              <div className="md-form md-outline mb-0">
                <input type="text" id="discount-code1" className="form-control font-weight-light"
                  placeholder="Enter discount code"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
        )
    }
}