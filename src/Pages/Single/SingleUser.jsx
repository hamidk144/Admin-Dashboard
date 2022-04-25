import "./Single.scss";
import MonthlyChart from '../../Components/monthlyChart/MonthlyChart';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import { useParams } from "react-router-dom";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";
import { userRows, userColumns } from "../../UsersTabelData";
import { } from "../../ProductsTableData"




const SingleUser = () => {

  let { id } = useParams();
  console.log(id);
  console.log(userRows[id - 1].img);


  return (


    <div className="single">
      <Sidebar />

      <div className="Main-content">
        <Navbar />

        {userRows.map((data, index) => {
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
                      <h1 className="itemTitle">{data.username}</h1>
                      <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">{data.email}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">{data.number}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">
                          {data.adress}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Status:</span>
                        <span className="itemValue">{data.status}</span>
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

export default SingleUser;