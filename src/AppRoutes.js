import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Cunnect from './components/Cunnect'
import Discover from './components/Discover'
import EditPick from './components/EditPick'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import Review from './components/Review'
import NotFound from './components/NotFound'

const AppRoutes = () => {
  const routes = [{
    pathname: '/', name: <Home />

  },
  {
    pathname: '/blog', name: <Contact />

  },
  {
    pathname: '/contact', name: <Discover />

  },
  {
    pathname: '/cunnect', name: <Blog />

  },
  {
    pathname: '/discover', name: <EditPick />

  },
  {
    pathname: '/editPick', name: <Cunnect />

  }
  ,
  {
    pathname: '/reviews', name: <Review />

  },
  {
    pathname: '*', name: <NotFound />

  }
  ]
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((e, i) => (
            <Route key={i} path={e.pathname} element={e.name} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes