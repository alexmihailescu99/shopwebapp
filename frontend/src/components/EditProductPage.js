import React from "react";
import axios from "axios";
//axios.defaults.withCredentials = true;
export default class EditProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
            description: "",
            price: 0,
            type: "",
            details: ""
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDetails = this.onChangeDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let role = localStorage.getItem("role");
        if (role === "USER" || role === "ANON") {
            window.location.href = "/notAuthorized";
        }
        let link = "http://localhost:8080/product/" + this.props.match.params.name;
        axios.get(link)
        .then(res => {
            this.setState({
                name: res.data.name,
                title: res.data.title,
                description: res.data.description,
                price: res.data.price,
                type: res.data.type,
                details: res.data.details
            })
        })
        .catch(err => {
            alert(err);
        });
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

    onChangeDetails(e) {
        this.setState({
            details: e.target.value
        });
    }

    async onSubmit(e) {
        
        alert(this.state.description)
        await axios.post("http://localhost:8080/product/update", {
            name: this.state.name,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            type: this.state.type,
            details: this.state.details
        }
        )
        .then((res) => {
            alert(res.status);
        })
        .catch((err) => {
            alert(err.response.status);
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <h3>Edit {this.state.title}</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.onChangeName} id="username" type="text" className="form-control" placeholder={this.state.name} />
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input value={this.state.title} onChange={this.onChangeTitle} id="username" type="text" className="form-control" placeholder={this.state.title} />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input value={this.state.description} onChange={this.onChangeDescription} id="email" type="text" className="form-control" placeholder={this.state.description} />
                </div>

                <div className="form-group">
                    <label>Details</label>
                    <input value={this.state.details} onChange={this.onChangeDetails} id="email" type="text" className="form-control" placeholder={this.state.details} />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input value={this.state.price} onChange={this.onChangePrice} id="email" type="number" className="form-control" placeholder={this.state.price} />
                </div>



                <button type="submit" className="btn btn-dark btn-lg btn-block">Update product</button>
                
            </form>
        );
    }
};