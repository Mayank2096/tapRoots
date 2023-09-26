import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import {createBrowserRouter,createRoutesFromElements,Route,Router,RouterProvider} from 'react-router-dom';
import App from "./App";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
      <Route index={true} path="/" element={<HomeScreen/>} />
      <Route path="/product/:id" element={<ProductScreen/>} />
    </Route>
    )
  )

ReactDom.render(
<div>
  <RouterProvider router={router} />
</div>,
document.getElementById("root")
);
