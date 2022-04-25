import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import OrdersTable from '../../Components/OrdersTable/OrdersTable';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Orders.scss';

const Orders = () => {
  return (
    <div className='orders' >
      <Sidebar />
      <div className="Main-content">
        <Navbar />

        <div className='orders-history'>
          <OrdersTable type='full-list' />
        </div>

      </div>
    </div>
  )
}

export default Orders