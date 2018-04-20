import React, {Component}from 'react';
import CarList from '../containers/CarList';
import Details from '../containers/Details';
import SockJS from "sockjs-client";
import {StompClientContext} from "../context/StompClientContext";
import { Stomp } from "stompjs/lib/stomp";

class WebPage extends Component {

  componentDidMount() {
    this.webSocketConnect();
  }

  webSocketConnect() {
    this.socket = new SockJS("http://localhost:8083/stomp/services/endpoint-uri");

    StompClientContext.client = Stomp.over(this.socket);
    StompClientContext.client.debug = "function";

    StompClientContext.client.connect({}, (frame) => {
      const sessionId = this.socket._transport.url.split("/").reverse()[1]; // eslint-disable-line no-underscore-dangle
      console.log("Connected to WS: " + frame);// eslint-disable-line no-console
      console.log("SessionId: " + sessionId);// eslint-disable-line no-console

      StompClientContext.client.subscribe("/topic/test", (message) => {
        console.log("**** message", message); // eslint-disable-line no-console
      });

    }, (error) =>{
      console.log("Error WS: " + error);// eslint-disable-line no-console
    });
  }

  render() {
    return <div>
      <h2>Cars: </h2>
      <CarList />
      <hr/>
      <h3>Details: </h3>
      <Details />
    </div>
  };
}

export default WebPage;