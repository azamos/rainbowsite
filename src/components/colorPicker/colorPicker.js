import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './colorPicker.actions';

class ColorPicker extends Component {
  render() {
    const { color, picked_color } = this.props;
    return (
      <div>
        {color}
        <input type = "color" value = {color} onChange = {(e)=>picked_color(e.target.value)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  color: state.color
});


export default connect(mapStateToProps, actions)(ColorPicker);