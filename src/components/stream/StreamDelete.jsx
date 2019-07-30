import React, { Fragment } from 'react';
import Modal from '../Modal';

const actions = (
	<Fragment>
		<button className="ui button negative">Delete</button>
		<button className="ui button">Cancel</button>
	</Fragment>
);
class StreamDelete extends React.Component {
	render() {
		return (
			<div>
				StreamDelete
				<Modal title="Delete Stream" content="Are you sure to delete the stream?" actions={actions} />
			</div>
		);
	}
}

export default StreamDelete;
