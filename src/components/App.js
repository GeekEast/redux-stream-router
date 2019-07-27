import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StreamCreate, StreamEdit, StreamList, StreamDelete, StreamShow } from './stream';
import Header from './Header';

const App = () => {
	return (
		<div className="ui container">
			<Router>
				<Header />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit" exact component={StreamEdit} />
				<Route path="/streams/delete" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
				<Route path="/" exact component={StreamList} />
			</Router>
		</div>
	);
};

export default App;
