import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Library from './Library';
import Photo from './Photo';

function Body(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/library' component={Library} />
        <Route path='/photo' component={Photo} />
      </Switch>
    </div>

  );
}

export default Body;
