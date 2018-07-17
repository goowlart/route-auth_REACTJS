import React from 'react';

import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => ( //user only have access if authenticated
	<Route 
	{...rest}
	 render={props => 
		isAuthenticated() ? (
			<Component {...props} />
			) : (
			<Redirect to={{ pathname: '/', state: {from: props.location } }} />
			)
	} 
	/>
); 

const Routes = () => (
	<BrowserRouter> 
	<Switch>
	<Route exact path="/" component={() => <h1>Hello World </h1>} />
	<PrivateRoute path='/app' component ={() => <h1>You are logged in </h1> } />
	</Switch>
	</BrowserRouter> 
);

// BrowserRouter | ability to understand the url
// Switchdo | not let two streets be called at the same time, default the first 

export default Routes;