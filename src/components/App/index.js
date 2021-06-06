import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import * as routes from '../../Routes/routes'

import PageLoading from '../common/PageLoading'

import './index.css'

const HomePage = React.lazy(() => import('../Pages/Home'))
const AllProducts = React.lazy(() => import('../Pages/AllProducts'))

const App = () => {

  return (
    <Suspense fallback={<PageLoading />}>
      <div className="app">
        <Route exact path={routes.Home} component={() => <HomePage />} />
        <Route exact path={routes.AllProducts} component={() => <AllProducts />} />
      </div>
    </Suspense>
  )
}

export default App
