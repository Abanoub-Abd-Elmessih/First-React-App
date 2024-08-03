import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Layout from "./Components/Layout/Layout"
import NotFound from "./Components/NotFound/NotFound"

function App() {
  let router = createBrowserRouter([
    {path:'',element:<Layout/> , children:[
      { index:true ,element:<Home/>},
      { path:'about',element:<About/>},
      { path:'portfolio',element:<Portfolio/>},
      { path:'contact',element:<Contact/>},
      { path:'*',element:<NotFound/>},
    ]},
  ])
    return(
      <RouterProvider router={router}></RouterProvider>
    )
    
}

export default App
