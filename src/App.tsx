import React, { FC, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import Home from './views/Home'
const Login = lazy(() => import('./views/Login'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: FC = () => {
  return (
    <Suspense fallback={ <Spin />}>
      <Router>
        <Switch>
          <Route path="/admin" render={ () => (
            <Home>
              <Switch>
                <Route exact path="/admin/dashboard" component={ lazy(() => import('./views/Dashboard'))} />
                <Route exact path="/admin/ui/buttons" component={ lazy(() => import('./views/UI/Button')) } />
                <Redirect from="/admin" exact to="/admin/dashboard" />
                <Redirect from="/admin/*" exact to="/404" />
              </Switch>
            </Home>
          )} />
          <Route path="/login" component={ Login } />
          <Route path="/404" component={ NotFound } />
          <Redirect exact from="/" to="/admin/dashboard" />
          <Redirect from="/*" to="/404" />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
