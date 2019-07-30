import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StreamCreate, StreamEdit, StreamList, StreamDelete, StreamShow } from './stream';
import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
					<Route path="/streams/edit/:id" exact component={StreamEdit} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/:id" exact component={StreamShow} />
					<Route path="/" exact component={StreamList} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
