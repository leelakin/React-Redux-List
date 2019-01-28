import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import SongList from './containers/SongList'
import SongView from './containers/SongView'
//get the rootReducer to pass for STORE creation
import reducers from './reducers'// doesn't require braces bc it's a DEFAULT EXPORT
//if I sourced out <App/>, it would be a 'dumb' component, not a container (bc it doesn't care about the app state, it just imports the containers)
const App = () => {
  return (
    <React.Fragment>
     
      <div className="ui two column centered grid">
        <div className="two column row">
          <h2 className="ui huge header">Simple React/Redux List Picker</h2>
        </div>
        <SongList />
        <SongView />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
<Provider store={createStore(reducers)}>
  <App />
</Provider>, document.querySelector('#root'))