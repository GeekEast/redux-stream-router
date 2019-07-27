import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
class GoogleAuth extends React.Component {
	componentDidMount() {
		// load google api auth2 lib
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '449968248384-k2sa9plpnpu6l4n5tbm2s5pb0gksrb5k.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					// this refers to GoogleAuth
					this.auth = window.gapi.auth2.getAuthInstance();
					// initialzie the isSignedIn prop
					this.onAuthChange(this.auth.isSignedIn.get());
					// listen to google isSignedIn status
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn(this.auth.currentUser.get().getId());
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignIn === null) {
			return null;
		}

		if (this.props.isSignIn === true) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon" />
					Sign Out
				</button>
			);
		}

		if (this.props.isSignIn === false) {
			return (
				<button className="ui red google button" onClick={this.onSignInClick}>
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
