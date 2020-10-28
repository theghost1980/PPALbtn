import React, { Component } from 'react';
import ReactPayPal from './ReactPayPal';
import CloseBtn from './CloseBtn';


export default class ParentPPAL extends Component {
    state = { checkOut: false };

    handleState = (value) => {
        this.setState({ checkOut: value });
    }
    render() {
        const _checkOut = this.state.checkOut;
        if (_checkOut){
            return (
                <div className="payments-div">
                    <ReactPayPal />
                    <CloseBtn closeChild={this.handleState} />
                </div>
            )
        } else {
            return (
                <div>
                    <h1>React-Paypal</h1>
                    <button onClick={() => this.handleState(true)}>CheckOut</button>
                </div>
            )
        }
    }
}
