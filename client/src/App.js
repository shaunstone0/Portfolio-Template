import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/nav/Navbar';
import Menu from './components/nav/menu/Menu';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';
import FullProject from './components/projects/fullproject/FullProject';
import Contact from './components/contact/Contact';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

library.add(fas);

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Fragment>
              <Navbar handleMouseDown={this.handleMouseDown} />
              <Menu
                handleMouseDown={this.handleMouseDown}
                menuVisibility={this.state.visible}
              />
              <Route exact path='/' component={Landing} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/project/:id' component={FullProject} />
              <Route exact path='/contact' component={Contact} />
            </Fragment>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
