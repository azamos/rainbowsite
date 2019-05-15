import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './counter.actions';
class Counter extends Component {
    render = () => {
        const { counter, color ,add , dec, } = this.props;
        return <div>
            <button onClick={add}>+</button>
            <button onClick={dec}>-</button>
            <h1 style ={{color}}>{counter*1000}</h1>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
    color: state.color
});

export default connect(mapStateToProps,actions)(Counter);


