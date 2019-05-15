import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './dataCruncher.actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import contrastingColor from '../../services/color'

class DataCruncher extends Component {
    render() {
        const { beginFetch, users, color } = this.props;
        return (
            <Card style={{ width: '18rem', 'backgroundColor': contrastingColor(color) }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{ color }}>
                        {users}
                    </Card.Text>
                    <Button variant="primary" onClick={beginFetch}>begin fetch</Button>
                </Card.Body>
            </Card>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users,
    color: state.color.value
});
const mapDispatchToProps = (dispatch) => ({
    beginFetch: () => actions.dataCrunch(dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(DataCruncher);
