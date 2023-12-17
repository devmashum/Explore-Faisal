import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='  xl:px-20 lg:px-10'>
    {/* hover:bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 */}

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  </div>
)
