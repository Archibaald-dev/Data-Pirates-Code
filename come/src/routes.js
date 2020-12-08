import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import Navbar from './navbar';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

 //<Route path="/some/where" component={SomePage} />
 //<Route path="/some/otherpage" component={SomeOtherPage} />
export default (
  <Route path="/" component={Navbar}>
  </Route>
);