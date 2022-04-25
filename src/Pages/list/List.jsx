
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar';
import DataTable from '../../Components/dataTable/DataTable';
import './List.scss';

const List = ({title, table}) => {
  return (
    <div className='list'>

    <Sidebar/>
      <div className='Main-content' >

        <Navbar/>
        
          <DataTable title={title} table={table} />

      </div>
      

    </div>
  )
}

export default List