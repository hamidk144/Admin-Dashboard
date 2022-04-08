import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './RecentOrders.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {columns,rows} from '../../OrdersTableData';




const OrdersTable = ({type}) => {

const [pageSize, setPageSize] = React.useState(10);



return (

<div className={`OrdersTable ${type}`}>

<div className="table-top">
        <h3 className='title'>RECENT ORDERS</h3>
        <MoreVertIcon className='icon' />
      </div>

    <div className={`table ${type}`}>
        <DataGrid
        className='OrderGrid'
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        
        />
  </div>
  </div>
  )
}

export default OrdersTable;