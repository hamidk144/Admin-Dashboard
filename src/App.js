import {
  BrowserRouter,
  Routes,
  Route,
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


function App() {

  const {DarkMode} = useContext(DarkContext);
  return (

    <div className={DarkMode? "App Dark": "App Light"}>
      <BrowserRouter>

        <Sidebar />

        <div className="Main-content">
           
           <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/users" element={<List title="USERS LIST" table='userstable' />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="/users/new/:id" element={<New inputs={userInputs} title='Add New User' />} />

            <Route path="/products" element={<List title="PRODUCTS LIST" table='productstable' />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/products/new/:id" element={<New inputs={productInputs} title='Add New Product' />} />
            <Route path="/UnderConstruction/:id" element={<UnderConstruction />} />
            <Route path="/orders" element={<Orders />} />


          </Routes>

        </div>

      </BrowserRouter>
    </div>

  );
}

export default App;
