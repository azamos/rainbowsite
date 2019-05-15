import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './colorPicker.actions';
import Button from 'react-bootstrap/Button';
import { rainBow } from "../../services/color";

class ColorPicker extends Component {
  render() {
    const { color, picked_color , makeItRain} = this.props;
    return (
      <div>
        <input type = "color" value = {color} onChange = {(e)=>picked_color(e.target.value)}/>
        <Button variant="outline-danger" onClick = { makeItRain } >rainbow it</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  color: state.color
});

const mapDispatchToProps = (dispatch) => ({
  picked_color: (color) => dispatch(actions.picked_color(color)),
  makeItRain: () => rainBow(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps )(ColorPicker);