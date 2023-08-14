import React from "react";
import Button from "@mui/material/Button";
import "../css/Footer.css";
import { IconButton, Typography } from "@mui/material";

import AppStoreIcon from "../assets/appStoreIcon.svg";
import GooglePlayIcon from "../assets/googlePlayIcon.svg";
import LeftTwitterIcon from "../assets/leftTwitterIcon.svg";
import TwitterIcon from "../assets/twitterIcon.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="row px-5 d-flex justify-content-between pb-1">
      <div className="col-md-4 px-0 d-flex align-items-center">
        {/* svg in mui btn using IconButton component as start or end icon */}

        {/* APP STORE btn */}
        <Button
          variant="outlined"
          startIcon={
            <IconButton className="muiIcon">
              <img src={AppStoreIcon} alt="AppStoreIcon" />
            </IconButton>
          }
          className="mr-4 mb-2"
          style={{ border: "1px solid var(--textColor)",
          backgroundColor: "black" }}
        >
          <b className="footerBtnText">APP STORE</b>
        </Button>

        {/* GOOGLE PLAY */}
        <Button
          variant="outlined"
          startIcon={
            <IconButton className="muiIcon">
              <img src={GooglePlayIcon} alt="GooglePlayIcon" />
            </IconButton>
          }
          className="mb-2"
          style={{ border: "1px solid var(--textColor)",
          backgroundColor: "black"}}
        >
          <b className="footerBtnText">GOOGLE PLAY</b>
        </Button>
      </div>
      <div className="col-md-7 col-lg-5 px-0" id="paraSocial">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-md-6 px-0 mb-2">
            <Typography id="footerParagraph">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </Typography>
          </div >
          <div className="col-md-6 d-flex justify-content-center align-items-between px-0 mb-2" id="social" style={{position:"relative",zIndex:"1"}}>
            <IconButton
              className="muiIcon mx-3"
              style={{
                backgroundColor: "black",
                height: "36px",
                width: "36px",
              }}
            >
              <img src={LeftTwitterIcon} alt="LeftTwitterIcon" />
            </IconButton>
            <IconButton
              className="muiIcon mx-3"
              style={{
                backgroundColor: "black",
                height: "36px",
                width: "36px",
              }}
            >
              <img src={TwitterIcon} alt="TwitterIcon" />
            </IconButton>
            <IconButton
              className="muiIcon ml-3"
              style={{
                backgroundColor: "black",
                height: "36px",
                width: "36px",
              }}
            >
              <InstagramIcon style={{color:"white"}}/>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
