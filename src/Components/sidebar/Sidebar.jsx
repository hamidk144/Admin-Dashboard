import React, { useContext } from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, NavLink } from "react-router-dom";
import { DarkContext } from '../../Context/DarkModeContext';



const Sidebar = () => {
  const {dispatch} = useContext(DarkContext);
  
  return (

    <div className='sidebar'>

       <div className="side-top">
         <NavLink to='/' style={{textDecoration: "none"}}>  <div className="logo">iDashboard</div></NavLink>
       </div>

     <div className="side-middle">

       <ul>

          <p className="title">MAIN</p>
         <NavLink to='/'  className='navLink'>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
          </NavLink>


          <p className="title">LISTS</p>
           <NavLink to='/users' className='navLink' > 
             <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
            </NavLink>
    

          <NavLink to='/products' className='navLink'> 
             <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
            </NavLink>


         <NavLink to='/orders' className='navLink'>
           <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          </NavLink> 

          <NavLink to='/UnderConstruction/delivery' className='navLink'>
          <li>
            <LocalShippingIcon className="icon"  />
            <span>Delivery</span>
          </li>
          </NavLink>


          <p className="title">USEFUL</p>

          <NavLink to='/UnderConstruction/stats' className='navLink'>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          </NavLink>

          
          <NavLink to='/UnderConstruction/notification'  className='navLink'>
            <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </NavLink>



          <p className="title">SERVICE</p>
        <NavLink to='/UnderConstruction/systemsHelath'  className='navLink'>  
        <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          </NavLink>

          <NavLink to='/UnderConstruction/logs'  className='navLink'>
             <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          </NavLink>

          <NavLink to='/UnderConstruction/settings'  className='navLink'> 
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          </NavLink>


          <p className="title">USER</p>
          <NavLink to='/UnderConstruction/profile'  className='navLink'> 
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </NavLink>

          <NavLink to='/UnderConstruction/logout'  className='navLink'> 
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </NavLink>

        </ul>

       </div>
      



       <div className="side-bottom">
          <div className='color-option' onClick={ ()=> {return (dispatch({type:'DarkMode'}))} }></div>
          <div className='color-option' onClick={ ()=> {return (dispatch({type:'LightMode'}))} }></div>
       </div>
       
        
        </div>
  )
}

export default Sidebar