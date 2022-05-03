import React, { useEffect } from 'react';
import './DataTable.scss';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRows, userColumns } from '../../UsersTabelData';
import { productsRows, productsColumns } from '../../ProductsTableData';

import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';





const useStyles = makeStyles({
  root: {
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
  }
});




const DataTable = ({ title, table }) => {


  const [pageSize, setPageSize] = React.useState(10);
  const [usersdata, setUsersData] = useState([]);
  const [productsdata, setProductsData] = useState([]);
  const classes = useStyles();




  useEffect(() => {

    //Fetching Data, Not Real Time
    /* const fetchdata= async()=>{
  let list=[]
     try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
         list.push({id:doc.id, ...doc.data()});
        });
  
        setUsersData(list)
        
      }catch(err){
        console.log(err);
      }  
    } 
  fetchdata();*/


    //LISTENING TO DATA
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
     
      let list = [];

      snapshot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      }, 
      (error) => {
        console.log(error);
      });

      setUsersData(list);

    });

//cleanup Function
    return()=>{
      unsub();
    }

  }, [])




  useEffect(() => {

    //LISTENING TO DATA
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
     
      let productslist = [];

      snapshot.docs.forEach(doc => {
        productslist.push({ id: doc.id, ...doc.data() });
      }, 
      (error) => {
        console.log(error);
      });

      setProductsData(productslist);

    });

//cleanup Function
    return()=>{
      unsub();
    }

  }, [])






  const handleUsersDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      console.log('Successfully deleted user');

    } catch (err) {
      console.log(err);
    }

    setUsersData(usersdata.filter((item) => item.id !== id));
  };



  const handleProductsDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log('Successfully deleted user');

    } catch (err) {
      console.log(err);
    }
    setProductsData(productsdata.filter((item) => item.id !== id));
  };



  // view and delte column of table
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {

        return (
          <div className="cellAction">


            {(table == 'userstable') ? <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <span className="viewButton"> View </span>
            </Link> :
              <Link to={`/products/${params.row.id}`} style={{ textDecoration: "none" }}>
                <span className="viewButton"> View </span>
              </Link>
            }

            {(table == 'userstable') ? <Link to={`/users/new/${params.row.id}`} style={{ textDecoration: "none" }}>
              <span className="viewButton"> Edit </span>
            </Link> :
              <Link to={`/products/new/${params.row.id}`} style={{ textDecoration: "none" }}>
                <span className="viewButton"> Edit </span>
              </Link>
            }


            {(table == 'userstable') ?
              <div onClick={() => handleUsersDelete(params.row.id)} >
                <span className="deleteButton"> Delete </span>
              </div>
              :
              <div onClick={() => handleProductsDelete(params.row.id)}>
                <span className="deleteButton"> Delete </span>
              </div>
            }
          </div>
        );
      },
    },
  ];


  return (

    <div className="DataTable">



      <div className="table-top">
        <h3 className='title'>{title}</h3>

        <div className='addnew' >
          {(table === "userstable") ? <Link to='/users/new/000' className='Addnew'>Add New User</Link> :
            <Link to='/products/new/000' className='Addnew'>Add New Product</Link>}
        </div>

      </div>

      <div className='table'>
        <DataGrid
          className={`DataGrid ${classes.root}`}
          rows={(table === 'userstable') ? usersdata : productsdata}
          columns={(table === 'userstable') ? userColumns.concat(actionColumn) : productsColumns.concat(actionColumn)}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </div>
    </div>
  )

}

export default DataTable