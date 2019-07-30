## React Router

### Dependency
- react-router-dom

- Router doesn't care about `localhost:3000`, it cares about sth behind `localhost:3000` like `/`

### Question
 - **Please see the following code and answer what will happen after enter `localhost:3000`**
    ```javascript
        <BrowserRouter>
            <Route path="/" exact component={PageOne} />
            <Route path="/" exact component={PageTwo} />
        </BrowserRouter>
    ```
    1. The PageOne and PageTwo Component will be both displayed.
    2. Browser Router will check `all` the path and matched route will be displayed one by one.
 - **Please see the following code and answer what will happen after enter `localhost:3000`**
    ```javascript
        <BrowserRouter>
            <Route path="/"  component={Home} />
            <Route path="/pageone"  component={PageOne} />
        </BrowserRouter>
    ```
    - The PageOne will be displayed.

 - **How React Router match path?**
   1. For example. for address `localhost:3000/page/5`, and we have path `/`, `/page`, `/page/5`.
   2. The History Obejct will extract path from address as `/page/5`
   3. Then will run this function `'/page/5'.contains('/')`,`'/page/5'.contains('/page')`,`'/page/5'.contains('/page/5')`
   4. And will return `all` true, so all the path will be matched and the respective components will be returned.
 - **Tell us the difference between using `exact` and not using `exact`**
    1. using `exact` will call something like `===`
    2. not using `exact` will call something like `contains`
 - **Why is it a bad practice to use anchor tag in React to redirect to other page within the website?**
    1. This will cause a new request to the server, which is Network expensive and unnecessary.
    2. It's a good practice to use `<Link>` component from `react-router-dom`. `It's just about showing and hiding different components.`
    3. Both way will cause the re-render of component, the difference is the `networking`.
 - **What will happen if no path is matched in traditional server vs React Router?**
    1. In traditional server, the default behaviour is to return a 404 page.
    2. In React Router, the default to to return `index.html`.
 - **Components like `Navigation` bar, should you put it inside `BrowserRouter`, why?**
    1.These are common things you want to display to every page.
    2.There are **two** ways to solve this problem: 
    3.Outside the router: this works but you `cannot` use `<Link>` within the common components.
    4.Inside the router: this works and you can also use `<Link>`  
 - **Why we use History Object? And How?**
  - Because we want to manipulate the browser programatically 
  - Create our own `history` object as params and use with `Router` from 'react-router-dom' rather than `BrowserRouter`
- **Why we need to isolate component when using React-router?**
  - For example, `edit` Streams depends on the state of `all` streams.
  - We need to isolate the streamEdit router component and the streamList router component
  - Otherwise, it will cause some error `sometimes`.
### 3 Routers

| Name          | Column B                | Column C                        |
| ------------- | ----------------------- | ------------------------------- |
| BrowserRouter | `localhost:3000/page`   | add path after Top Level Domain |
| HashRouter    | `localhost:3000/#/page` | add a # between TLD and path    |
| MemoryRouter  | `localhost:3000`        | add nothing after TLD           |

### Google OAuth


[OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes)

[Google Console](https://console.developers.google.com)

[gapi docs](https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams)


### Configure Redux Dev Tool
```javascript
// index.js
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
	<Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
		<App />
	</Provider>,
	document.getElementById('root')
```


### [Redux Form](https://redux-form.com/8.2.2/)
- a convenient reducer for form component
- A convenient solution for communication between views and redux state.
```javascript
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
	renderError = ({ error, touched }) => {
		if (error && touched) {
			return (
				<div className="ui error message">
					<div className="header"> {error}</div>
				</div>
			);
		}
	};
	// meta is connected with validate function
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};
	render() {
		return (
			// magic props with handleSubmit method
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				{/* user input field */}
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

// every time you input will run this function
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);

```


### Convert Object to Array
```javascript
const streams = Object.values(object);
```
### Convert Array to Object
```javascript
const streams = _.mapKeys(array,'id');
```

### Loadsh `mapKeys()`
```javascript
// this will take '' as the new key and return as an object
mapKeys(iterable,(v,k)=>{return ''})
// this will take v[attr_name] as the new key and retur as an object
mapKeys(iterable, 'attr_name')
// equals to 
mapKeys(iterable, (v,k) => v['attr_name'])
```

### View Update Flow Chart
<img style="width: 80%; margin: auto" src="https://geekeaskblogpics.s3-ap-southeast-2.amazonaws.com/posts/WX20190729-160600%402x.png"/>


### History Object
- It's more flexible to manage your own history object rather than useing the BrowserRouter's
```javascript
// history.js
import { createBrowserHistory } from 'history';
export default createBrowserHistory();
```
```javascript
import React from 'react';
// code code
import { Router, Route } from 'react-router-dom';
import history from '../history';

const App = () => {
	return (
      <div className="ui container">
         // core code
			<Router history={history}>
				<Header />
				<Route path="/" exact component={StreamList} />
			</Router>
		</div>
	);
};

export default App;
```

### React Portal
- Why we need to use react portal?
  - If we want to use modal, we'd better take it as a child of `body` element with a `z-index` value
  - Portal is a convenient way to `modify` the `parent` component of an existing component.

### Fragment
- Why we need to use React Fragment?
  - Some `div` wrapper will break the styling rules
  - `Fragment` is like `div`, but doesn't produce any `html` tags

### Switch
- What is switch? What is it used for?
	```javascript
	// this will show StreamCreate and StreamShow together
	// 同级变量和定量重合问题
	<Router history={history}>
		<Header />
		<Route path="/streams/new" exact component={StreamCreate} />
		<Route path="/streams/:id" exact component={StreamShow} />
	</Router>
	```
	- Solution
	```javascript
		// 只会渲染第一个匹配到的路径
		<Router history={history}>
			<Header />
			<Switch>
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/:id" exact component={StreamShow} />
			</Switch>
		</Router>
	```
- Conclusion:
  - Different Lengths: always with **`exact`**: order doesn't matter but for good format - from **`Long`** to **`Short`**
	```javascript
	<Route path="/streams/" exact component={StreamShow} />
	<Route path="/" exact component={StreamList} />
    ```
  - Same Length: always wrapped with **`Switch`**: from **`Fixed`** to **`Variable`**
	```javascript
	<Switch>
		<Route path="/streams/new" exact component={StreamShow} />
		<Route path="/streams/:id" exact component={StreamList} />
	</Switch>
    ```