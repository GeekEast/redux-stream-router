import React from 'react';
import { udpateStream, getStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
	componentDidMount = () => {
		// why here? component isolation with react router
		// you don't have to load all, just one is enough
		this.props.getStream(this.props.match.params.id);
	};
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.udpateStream(this.props.match.params.id, formValues);
	};
	render = () => {
		return (
			<div>
				<h3>Edit the stream</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={_.pick(this.props.stream, 'title', 'description')}
				/>
			</div>
		);
	};
}

const mapStateToProps = (state, ownProps) => {
	const { streams } = state;
	return { stream: _.get(streams, `[${ownProps.match.params.id}]`) };
};
export default connect(mapStateToProps, { getStream, udpateStream })(StreamEdit);
