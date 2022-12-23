import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
    static defaultProps = {
        name: "Gianmai",
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                {this.props.age > 18 && this.props.age < 65 ? <Age age={this.props.age}/> : ""}
            </div>
        )
    }
}