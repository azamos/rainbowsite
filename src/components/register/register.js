import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './register.actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Register extends Component {
    render() {
        const { name, pass, email, fileName, color, currentUser } = this.props;
        const { submitData, inputChanged, fileChanged } = this.props;
        return (
            <div>
                <Form>
                    <Form.Group controlId="ControlInput1">
                        <Row>
                            <Col xs={6} md={4}>
                                <Form.Label>name:</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="example: noobSlayer69" id="name" onChange={inputChanged} value={name} />
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Label>password:</Form.Label>
                                <Form.Control size="lg" type="password" id="pass" onChange={inputChanged} value={pass} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="ControlInput2">
                        <Row>
                            <Col xs={6} md={4}>
                                <Form.Label>email:</Form.Label>
                                <Form.Control size="lg" placeholder="example: noobSlayer69@gmail.com" type="email" id="email" onChange={inputChanged} value={email} />
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Label>profile picture:</Form.Label>
                                <Form.Control type="file" id="fileName" value={fileName} onChange={(e) => fileChanged(e)} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button variant="primary" size="lg" active onClick={() => submitData({ name, pass, email })}>Finish</Button>
                    <p style={{ color }}>
                        posting as: {currentUser.name}
                    </p>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = ({ registerData, color, currentUser }) => ({//{name,pass,email,file,fileName} === state.registerData
    ...registerData,
    color,
    currentUser
});
const mapDispatchToProps = (dispatch) => ({
    submitData: (data) => actions.sendData(dispatch, data),
    inputChanged: (e) => dispatch(actions.inputChanged(e.target)),
    fileChanged: (e) => dispatch(actions.fileChanged(e.target))
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
