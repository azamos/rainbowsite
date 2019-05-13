import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './dataCruncher.actions';

class DataCruncher extends Component {
    render() {
        const { beginFetch, users, color } = this.props;
        return (
            <div>
                <button onClick={beginFetch}>Fetch data</button>
                <p style={{ color }}>
                    {users}
                </p>
            </div>
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
