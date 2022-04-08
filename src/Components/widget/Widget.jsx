import './Widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({type}) => {

    let data;
    

    switch (type) {
        case "user":
          data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            number: 100,
            percent: 46,
            icon: (
              <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "order":
          data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            number: 96,
            percent: 67,
            icon: (
              <ShoppingCartOutlinedIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "earning":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            number: 400,
            percent: 87,
            icon: (
              <MonetizationOnOutlinedIcon
                className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
        case "balance":
          data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            number: 900,
            percent: 90,
            icon: (
              <AccountBalanceWalletOutlinedIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
      }



    return (
        <div className='widget'>
            
            <div className='left'>

                <div className='title'>{data.title}</div>
                <div className="numbers">{data.isMoney && "$"} {data.number} </div>
                <div className="link">{data.link}</div>

            </div>


            <div className="right">
                <div className="percentage" style={{color:"green"}}><KeyboardArrowUpIcon /> {data.percent}% </div>
                <div className="icon-container">{data.icon} </div>
            </div>
        </div>
    )
}

export default Widget