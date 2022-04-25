import "./Single.scss";
import MonthlyChart from '../../Components/monthlyChart/MonthlyChart';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import { useParams } from "react-router-dom";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";

import { productsRows } from "../../ProductsTableData"




const SingleProduct = () => {

  let { id } = useParams();
  console.log(id);



  return (

    <div className="single">
      <Sidebar />

      <div className="Main-content">
        <Navbar />


        {productsRows.map((data, index) => {
          if (data.id == id) {
            return (

              <div className="top">
                <div className="Singleleft">
                  <div className="editButton">Edit</div>
                  <h1 className="title">INFORMATION</h1>
                  <div className="item">
                    <img
                      src={data.img}
                      alt=""
                      className="itemImg"
                    />
                    <div className="details">
                      <h1 className="itemTitle">{data.productname}</h1>
                      <div className="detailItem">
                        <span className="itemKey">Category:</span>
                        <span className="itemValue">{data.category}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Status:</span>
                        <span className="itemValue">{data.status}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Price:</span>
                        <span className="itemValue">
                          {data.price}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
                <span className="right">
                  <MonthlyChart aspect={2.2 / 1} title="USER SPENDINGS (LAST 8 MONTHS)" />
                </span>
              </div>)
          }
        })}
        <div className="bottom">

          <OrdersTable />
        </div>
        </div>

      </div>


      );


};

      export default SingleProduct;