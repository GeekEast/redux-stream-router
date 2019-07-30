import React from 'react';
import { getStreams } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount = () => {
		this.props.getStreams();
	};

	renderCreate = () => {
		if (this.props.isSignIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	};

	renderAdmin = (stream) => {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	};

	renderList = () => {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<Link to={`/streams/${stream.id}`}>{stream.title}</Link>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { streams, userId, isSignIn } = state;
	return { streams: Object.values(streams), currentUserId: userId, isSignIn };
};

export default connect(mapStateToProps, { getStreams })(StreamList);
