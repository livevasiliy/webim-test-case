import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import axiosAuth from './middleware/axiosMiddleware'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import AuthLayout from './components/hoc/AuthLayout/AuthLayout'
import Login from './pages/Login'
import UsersLayout from './components/hoc/UsersLayout/UsersLayout'
const Users = React.lazy(() => import ('./pages/Users').then())
const NotFound = React.lazy(() => import ('./pages/NotFound').then())

export const history = createBrowserHistory('')

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      axiosAuth
    )
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
                <Suspense fallback={<div>Loading..</div>}>
                  <Users/>
                </Suspense>
              </UsersLayout>
            </Route>
            <Route path={"*"}>
              <Suspense fallback={<div>Loading..</div>}><NotFound /></Suspense>
            </Route>
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
