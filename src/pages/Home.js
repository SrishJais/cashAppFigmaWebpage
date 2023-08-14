import React from "react";
import "../css/Home.css";
import { Typography } from "@mui/material";
import phoneImg from "../assets/phoneImg.png";
import cubeImg from "../assets/cube.png";
import cubesImg from "../assets/cubes.png";
import stairsImg from "../assets/stairs.png";
import pillarImg from "../assets/pillar.png";

const Home = () => {
  return (
    <main
      id="heroSection"
      className="d-flex justify-content-center align-items-center"
    >
      <img src={cubeImg} alt="cubeImg" id="cubeImg" className="img-fluid" />
      <img src={cubesImg} alt="cubesImg" id="cubesImg" className="img-fluid" />

      <img src={phoneImg} alt="phoneImg" id="phoneImg" className="img-fluid" />
      <div id="headingContainer">
        <Typography
          style={{
            fontSize: "calc((193 / 1440) * 100vw)",
            fontWeight: "800",
            lineHeight: "0.87",
          }}
          className="heroSectionText text-center"
          id="cashText"
        >
          CASH
        </Typography>
        <Typography
          style={{
            fontSize: "calc((193 / 1440) * 100vw)",
            fontWeight: "800",
            lineHeight: "0.75",
          }}
          className="heroSectionText text-center"
          id="appText"
        >
          APP
        </Typography>
      </div>
      <img
        src={stairsImg}
        alt="stairsImg"
        id="stairsImg"
        className="img-fluid"
      />
      <img
        src={pillarImg}
        alt="pillarImg"
        id="pillarImg"
        className="img-fluid"
      />
    </main>
  );
};

export default Home;
