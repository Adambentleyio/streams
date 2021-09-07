import React from 'react';
import Modal from '../modal';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {

    componentDidMount(){
       this.props.fetchStream(this.props.match.params.id)
    }

    renderActions(){
        // destructure variables
        // const { id } is the same as this.props.match.params.id
        const { id } = this.props.match.params
    return (
        <React.Fragment>
            <button
            className="ui button negative"
            onClick={() => this.props.deleteStream(id) }>Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>)
    }

    renderContent(){
        if (!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        } return  `Are you sure you want to delete this stream with title: ${this.props.stream.title} ?`
    }

    render() {
        return (

            <Modal
            title="Delete stream"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}/>
    )}
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.streams)
    return {
        stream: state.streams[ownProps.match.params.id]

    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
