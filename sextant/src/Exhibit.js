import React, { Component } from 'react';


class Exhibit extends Component {
    render() {
        return (
            <div className={this.props.class}>

            <div className="card">
                <h2 className="card-header">{this.props.name}</h2>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
            </div>
        );
    }
}

export default Exhibit;