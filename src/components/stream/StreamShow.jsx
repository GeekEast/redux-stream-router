import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}
	componentDidMount = () => {
		// load the data to redux store
		const { id } = this.props.match.params;
		this.props.getStream(id);
		this.buildPlayer(id);
	};

	// when the id changes
	// habbit to use update life-cycle method
	componentDidUpdate = () => {
		const { id } = this.props.match.params;
		this.buildPlayer(id);
	};

	// when you leave the page, no necessary to use the player any more.
	componentWillUnmount = () => {
		this.player.destroy();
	};

	buildPlayer = (id) => {
		// if player exists, return nothing
		// if stream has not been loaded, return nothing
		if (this.player || !this.props.stream) {
			return;
		}
		this.player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
		this.player.play();
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading</div>;
		}

		const { title, description } = this.props.stream;
		return (
			<div>
				<video src="" ref={this.videoRef} style={{ width: '100%' }} controls={true} />
				<h1>{title}</h1>
				<h5>{description}</h5>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamShow);
