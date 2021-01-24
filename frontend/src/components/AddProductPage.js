import React from "react";
import axios from "axios";
const backEndUrl = "http://localhost:8080";
export default class AddProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
            description: "",
            price: 0,
            type: ""
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let role = localStorage.getItem("role");
        if (role === "USER" || role === "ANON") {
            window.location.href = "/notAuthorized";
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onSubmit(e) {
        alert(this.state.type);
        axios.post("http://localhost:8080/product/add", {
            name: this.state.name,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            type: this.state.type
        }
        )
        .then((res) => {
            alert(res.status);
        })
        .catch((err) => {
            alert(err);
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <h3>Add Product{this.state.title}</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.onChangeName} id="username" type="text" className="form-control" placeholder="Product name" />
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input value={this.state.title} onChange={this.onChangeTitle} id="username" type="text" className="form-control" placeholder="Product title" />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input value={this.state.description} onChange={this.onChangeDescription} id="email" type="text" className="form-control" placeholder="Product description" />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input value={this.state.price} onChange={this.onChangePrice} id="email" type="number" className="form-control" placeholder="Product price" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect2">Product Type</label>
                    <select  onChange={this.onChangeType} multiple class="form-control" id="type">
                        <option>smartphone</option>
                        <option>laptop</option>
                        <option>gaming</option>
                        <option>pcpart</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Add product</button>
                
            </form>
        );
    }
};