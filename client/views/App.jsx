import React from 'react'
import Route from '../config/router'

import AppBar from './layout/app-bar'

export default class App extends React.Component {
  componentDidMount() {
    // do something
  }
  render() {
    return [<AppBar />, <Route key="routes" />]
  }
}
