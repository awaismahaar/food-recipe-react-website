import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails.jsx'
import Home from './components/Home.jsx'
import Category from './components/Category.jsx'
import SearchElement from './components/SearchElement.jsx'
let router = createBrowserRouter([{
  path : '/',
  element : <App/>,
  children : [
    {
    path : '/',
    element : <Home/>
    },
    {
    path : '/:idMeal',
    element : <RecipeDetails/>
    },
    {
    path : '/category/:name',
    element : <Category/>
    },
    {
    path : '/search/:item',
    element : <SearchElement/>
    },
    ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
