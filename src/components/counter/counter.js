import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './counter.actions';
class Counter extends Component {
    render = () => {
        const { counter, color ,add , dec, } = this.props;
        return <div>
            <button onClick={add}>+</button>
            <button onClick={dec}>-</button>
            <h1 style ={{color}}>{counter}</h1>
            {color}
        </div>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
    color: state.color
});

export default connect(mapStateToProps,actions)(Counter);

