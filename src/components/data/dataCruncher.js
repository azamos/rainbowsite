import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './dataCruncher.actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class DataCruncher extends Component {
    render() {
        const { beginFetch, users, color } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
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
const mapStateToProps = ({ color, users }) => ({
    users,
    color
});
const mapDispatchToProps = (dispatch) => ({
    beginFetch: () => actions.dataCrunch(dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(DataCruncher);
