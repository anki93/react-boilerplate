import React, { Component } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Routes from '../Routes'

const components = Routes.map((r, key) =>
    <Route key={`route-${key}`} path={r.path} component={r.component}/>
)

class App extends Component {


  componentWillMount(){
  }

  render() {

    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
          <Header/>
          <Sidebar/>
          <div>
              {components}
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
