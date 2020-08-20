import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css'
import App from './App'
import './i18n'
// import * as serviceWorker from './serviceWorker';

const Loader = () => <div>loading...</div>

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Route path="/:anchor?">
          <App />
        </Route>
      </Router>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
