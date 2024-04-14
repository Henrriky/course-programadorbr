import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        //binded function
        // this.state = { count: this.props.count }
        this.state = {count: 0};
        this.add = this.add.bind(this)
    }

    add() {
        this.setState((state) => { return {count: state.count + 1}}, () => {
            console.log(this.state)
            localStorage.setItem("state", JSON.stringify(this.state))
            console.log
        })
    }

    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem('state')));
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default Counter;