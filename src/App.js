import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";
import New from './Pages/new/New.jsx'
import Orders from "./Pages/orders/Orders";
import SingleProduct from "./Pages/Single/SingleProduct";
import SingleUser from "./Pages/Single/SingleUser";
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction';
import './App.scss';
import Sidebar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/navbar/Navbar";
import { useContext } from "react";
import { DarkContext } from "./Context/DarkModeContext";
import ErrorPage from '../src/Pages/404/ErrorPage';
import { AuthContext } from "./Context/AuthContext";



function App() {

  const { DarkMode } = useContext(DarkContext);
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  const RequireAuth = ({children})=>{
      return currentUser? children: <Navigate to="/login" />
  }
  return (

    <div className={DarkMode ? "App Dark" : "App Light"}>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />


            <Route path="/users" element={
            <RequireAuth>
              <List title="USERS LIST" table='userstable' />
              </RequireAuth>} />

            <Route path="/users/:id" element={ 
            <RequireAuth>
              <SingleUser />
            </RequireAuth>} />

            <Route path="/users/new/:id" element={
            <RequireAuth>
              <New inputs={userInputs} title='Add New User' />
              </RequireAuth>} />

            <Route path="/products" element={
            <RequireAuth>
              <List title="PRODUCTS LIST" table='productstable' />
              </RequireAuth>} />

            <Route path="/products/:id" element={
             <RequireAuth>
               <SingleProduct />
               </RequireAuth>} />
            <Route path="/products/new/:id" element={
            <RequireAuth>
              <New inputs={productInputs} title='Add New Product' />
              </RequireAuth>} />

            <Route path="/UnderConstruction/:id" element={
            <RequireAuth>
              <UnderConstruction />
              </RequireAuth>} />

            <Route path="/orders" element={
            <RequireAuth>
              <Orders />
              </RequireAuth>} />

              <Route path="*" element={
            <RequireAuth>
              <ErrorPage/>
              </RequireAuth>} />

            </Routes>
          
       
      </BrowserRouter>
    </div>

  );
}

export default App;
