import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './register.actions';

class Register extends Component {
    render() {
        const {name,pass,email,fileName} = this.props;
        const {submitData,inputChanged,fileChanged} = this.props;
        return (
            <div>
                <form>
                    name:<input id="name" onChange = {inputChanged} value = {name}/>
                    password:<input type="password" id="pass" onChange = {inputChanged} value = {pass} />
                    email:<input type="email" id="email" onChange = {inputChanged} value = {email} />
                    profile picture<input type="file" id="fileName" value = {fileName} onChange = {(e) => fileChanged(e)} />
                    <button type ="button" onClick = { () => submitData({name,pass,email})}>Finish</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ registerData }) => ({//{name,pass,email,file,fileName} === state.registerData
    ...registerData
});
const mapDispatchToProps = (dispatch) => ({
    submitData: (data) => actions.sendData(dispatch, data),
    inputChanged: (e) => dispatch(actions.inputChanged(e.target)),
    fileChanged: (e) => dispatch(actions.fileChanged(e.target))
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
