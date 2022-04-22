import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import TripForm from './components/TripForm'
import DictionaryContainer from './containers/DictionaryContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="main_head">
          <h1>come on kayak</h1>
        </div>
        <NavBar />
        <Route exact path="/dictionary" component={DictionaryContainer} />
        <Route path="/newtrip" component={TripForm} />
        <Switch>
          <Route exact path="/dictionary" render={null} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
