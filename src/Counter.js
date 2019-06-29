import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    };
    render() {
        const {count} = this.state;
        return (
            <div className="btn">
                <button data-testid="counter-button" onClick={this.handleClick}>{count}</button>
            </div>
        );
    }
}

export default Counter;