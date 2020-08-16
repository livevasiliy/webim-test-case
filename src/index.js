import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import AuthLayout from './components/hoc/AuthLayout/AuthLayout'
import Login from './pages/Login'
import UsersLayout from './components/hoc/UsersLayout/UsersLayout'
import Users from './pages/Users'
import axiosAuth from './middleware/axiosMiddleware'

export const history = createBrowserHistory()

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      axiosAuth
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  ))

render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path={'/'}>
              <App />
            </Route>
            <Route exact path={'/login'}>
              <AuthLayout>
                <Login/>
              </AuthLayout>
            </Route>
            <Route exact path={'/users'}>
              <UsersLayout>
                <Users/>
              </UsersLayout>
            </Route>
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
