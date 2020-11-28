import React, { FC, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import Home from './views/Home'
import Common from './views/Common'

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
                <Route exact path="/admin/ui/gallery" component={ lazy(() => import('./views/UI/Gallery')) } />
                <Route exact path="/admin/table/basic" component={ lazy(() => import('./views/Table/Basic')) } />
                <Route exact path="/admin/table/advance" component={ lazy(() => import('./views/Table/Advance')) } />
                <Redirect from="/admin" exact to="/admin/dashboard" />
                <Redirect from="/admin/*" exact to="/404" />
              </Switch>
            </Home>
          )} />
          <Route path="/common" render={ () => (
            <Common>
              <Switch>
                <Route exact path="/common/detail/:id" component={ lazy(() => import('./views/Detail')) } />
                <Redirect from="/common/*" exact to="/404" />
              </Switch>
            </Common>
          )} />
          <Route path="/login" component={ lazy(() => import('./views/Login')) } />
          <Route path="/register" component={ lazy(() => import('./views/Register')) } />
          <Route path="/404" component={ lazy(() => import('./views/NotFound')) } />
          <Redirect exact from="/" to="/admin/dashboard" />
          <Redirect from="/*" to="/404" />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
