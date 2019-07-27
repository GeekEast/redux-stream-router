import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './Auth/GoogleAuth';
class Header extends React.Component {
	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link to="/streams/create" className="item">
					Streamy
				</Link>

				<div className="right menu">
					<Link to="/streams/show" className="item">
						All Streams
					</Link>

					<GoogleAuth />
				</div>
			</div>
		);
	}
}

export default Header;
