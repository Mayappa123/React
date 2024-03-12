import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ProductDetails from './pages/ProductDetails'
import Error from './pages/error'
import LifeCycle from './pages/lifeCycle'
import AxiosData from './pages/axios'

//components
import ContactUs from "./components/ContactUs";
import Address from "./components/Address";

//styles
import "./css/products.css";
import "./css/ClassCompo.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route app element={<Home />} />

      <Route path="/products" element={<Products />}>
        <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="about" element={<About />} />

      <Route path="contact" element={<Contact />}>
        <Route path="address" element={<Address />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>

      <Route path="lifeCycle" element={<LifeCycle />}></Route>

      <Route path="axios" element={<AxiosData />}></Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

