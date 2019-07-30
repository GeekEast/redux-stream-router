import React from 'react';
import { Router, Route } from 'react-router-dom';
import { StreamCreate, StreamEdit, StreamList, StreamDelete, StreamShow } from './stream';
import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit/:id" exact component={StreamEdit} />
				<Route path="/streams/delete/:id" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
				<Route path="/" exact component={StreamList} />
			</Router>
		</div>
	);
};

export default App;
