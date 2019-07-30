import React, { Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
	/**
	 * use componentDidMount to load data into redux store, 
	 * real data loading happends in the mappper function
	 */
	componentDidMount = () => {
		// load delete item information -> component isolation
		this.props.getStream(this.props.match.params.id);
	};

	onDelete = () => {
		this.props.deleteStream(this.props.stream.id);
		history.push('/');
	};

	renderActions = () => {
		return (
			<Fragment>
				<button onClick={this.onDelete} className="ui button negative">
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</Fragment>
		);
	};

	renderContent = () => {
		if (!this.props.stream) {
			return 'Are you sure to delete this stream?';
		}
		return `Are you sure to delete this stream: ${this.props.stream.title}?`;
	};

	render() {
		return (
			<div>
				<Modal
					title="Delete Stream"
					content={this.renderContent()}
					actions={this.renderActions()}
					onDismiss={() => history.push('/')}
				/>
			</div>
		);
	}
}

/**
 * offical props loading function
 */
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete);
