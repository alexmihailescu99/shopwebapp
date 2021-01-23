import React from "react";


export default class NotAuthorizedPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>You are not authorized to use this feature</h1>
        )
    }
}