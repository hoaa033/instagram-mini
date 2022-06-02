import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="header-wapper">
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </div>
          <div className="header__search">
            <input
              type="text"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              placeholder="&#x1F50E;&#xFE0E; Search..."
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <div className="pop-over">
                  <span>Recent</span>
                  <span>Clear All</span>
                </div>
              </Typography>
            </Popover>
          </div>
        </div>
        <div className="header__icons">
          <button className="icon__item">
            <HomeIcon />
          </button>
          <button className="icon__item">
            <SendIcon />
          </button>
          <button className="icon__item">
            <AddCircleOutlineIcon />
          </button>
          <button className="icon__item">
            <ExploreIcon />
          </button>
          <button className="icon__item">
            <FavoriteBorderIcon />
          </button>
          <Link to="/login" className="icon__item">
            <img
              src="https://via.placeholder.com/30"
              alt="profile"
              className="profile__img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
