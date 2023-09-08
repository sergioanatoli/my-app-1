import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Tela1 from './views/Tela1/Tela1.jsx'
import Tela2 from './views/Tela2/Tela2.jsx'
import Tela3 from './views/Tela3/Tela3.jsx'
import { db } from './Mock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tela1/>,

  },
  {
    path: "/2/:id",
    element: <Tela2 data={db}/>,
  },
  {
    path: "/3/:id",
    element: <Tela3 data={db}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
