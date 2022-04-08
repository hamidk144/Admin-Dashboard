import React from 'react'
import MonthlyChart from '../../Components/monthlyChart/MonthlyChart';
import Navbar from '../../Components/navbar/Navbar';
import OrdersTable from '../../Components/OrdersTable/OrdersTable';

import Sidebar from '../../Components/sidebar/Sidebar';
import Summary from '../../Components/summary/Summary';
import Widget from '../../Components/widget/Widget';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
   
      
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">

          <div className='summary'>
            <Summary />
          </div>

          <div className='monthly-chart'>
            <MonthlyChart title="LAST SIX MONTHS SALE"  aspect={2.2/1} />
          </div>

        </div>

        <OrdersTable/>



    
    </div>
  )
}

export default Home