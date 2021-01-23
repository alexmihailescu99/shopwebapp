import React from "react";


export default class NotAuthenticatedPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Please log in first</h1>
        )
    }
}