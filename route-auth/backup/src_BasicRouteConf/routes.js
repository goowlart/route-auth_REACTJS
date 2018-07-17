import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => (
	<BrowserRouter> 
	<Switch>
	<Route exact path="/" component={() => <h1>Hello World </h1>} />
	</Switch>
	</BrowserRouter> 
);

// BrowserRouter | ability to understand the url
// Switchdo | not let two streets be called at the same time, default the first 

export default Routes;