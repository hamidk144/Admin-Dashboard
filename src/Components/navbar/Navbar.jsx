import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from "react";
import { DarkContext } from "../../Context/DarkModeContext";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";



const Navbar = () => {
  const {dispatch, DarkMode} = useContext(DarkContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        
       {/*  <div className="search" >

          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />

        </div> */}



<TextField
        id="outlined-basic"
        placeholder="search"
        type="text"
        size="medium"
        className="search"
          sx={{
            "& input": {
              paddingTop: "6px",
              paddingLeft: "8px",
              fontSize:"13px",
             
            
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#FF5151", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF5151",
                border:"1px solid #FF5151",
                
              },
            },
          }}

        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                sx={{ fontSize:"8px",
                  "&": {
                    cursor: "pointer",
                  },
                }}
              />
            </InputAdornment>
          ),
        }}
      
      />

       
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="item">
          { DarkMode?
            <LightModeIcon
            className="icon"
            onClick={() => dispatch({ type: "Toggle" })}
            />:
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "Toggle" })}
            />

            }

          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;