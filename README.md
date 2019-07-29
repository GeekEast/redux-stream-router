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


### Redux Dev Tool
```javascript
// index.js
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
	<Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
		<App />
	</Provider>,
	document.getElementById('root')
```


### [Redux Form](https://redux-form.com/8.2.2/)
- a convenient reducer for form component

