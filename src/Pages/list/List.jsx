
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar';
import DataTable from '../../Components/dataTable/DataTable';
import './List.scss';

const List = ({title, table}) => {
  return (
    <div className='list'>
      
          <DataTable title={title} table={table} />


    </div>
  )
}

export default List