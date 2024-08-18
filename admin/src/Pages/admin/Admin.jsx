import React from 'react'
import './Admin.css'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Addproduct from '../../component/addproduct/Addproduct'
import Listproduct from '../../component/Listproduct/Listproduct'

 const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/listprodut' element={<Listproduct/>} />
      </Routes>
       </div>
  )
}

 export default Admin