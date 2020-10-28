import React, { Component } from 'react';

export default class CloseBtn extends Component {
    handleClick = () => {
        this.props.closeChild(false);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Close</button>
            </div>
        )
    }
}
