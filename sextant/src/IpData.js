import React, { Component } from 'react';


class IpData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: null,
        };
    }

    async componentDidMount() {
        const result = await this.getIp(this.props.ipVersion) ;
        this.setState({ ip:result.ip });
    }

    async getIp(ipVersion) {
        const targetUrl = ipVersion == 4 ? "https://api.ipify.org" : "https://api64.ipify.org"
        const response = await fetch(targetUrl+'?format=json');
        return await response.json();

         
    }

    render() {
        return (
            <h5>
                Your ipv{this.props.ipVersion} is: <span className='bold'> {this.state.ip}</span>
            </h5>
        );
    }
}

export default IpData;