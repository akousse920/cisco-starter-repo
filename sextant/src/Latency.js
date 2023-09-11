import React,{Component} from "react";
import { w3cwebsocket as W3CWebSocket  } from "websocket"; 
const  client  = new W3CWebSocket('ws://localhost:55455');
class Latency extends Component{

    constructor(props) {
        super(props);
        this.state = {
            latency: null ,
        };
    }


    async componentDidMount() {
        client.onmessage = function(e) {
           this.setState({
                latency: Date.now() - e.data
           });
        }.bind(this);
    }

    
   

    render(){
        return(
             <span>Latency is : {this.state.latency} ms</span>
        )
    }
}


export default Latency