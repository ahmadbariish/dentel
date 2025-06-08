/** @format */
// Mui
// import landing from "../images/bg_1.jpg";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import Videobg from "../Video/video_2025-05-17_18-30-18.mp4";
import Services from "./Services";
import About from "./About";
import Doctors from "./Doctors";
import Contact from "./Contact";
import ModelAppointment from "./ModelAppointment";

import React from "react";

// hooks
import { useState } from "react";
export default function Home() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className='container-home'>
        <video
          src={Videobg}
          autoPlay
          loop
          muted
          playsInline
          className='background-video'
        />
        <div className='content-home'>
          <Typography
            variant='h3'
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "5rem" },
              color: "#e8eaf6",
              position: "relative",
              zIndex: "10",
            }}>
            .حياة أفضل تبدأ بابتسامة جميلة
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: "1rem", md: "2.2rem" },
              mb: 3,
              color: "#e8eaf6",
              position: "relative",
              zIndex: "10",
              textAlign: "center",
            }}>
            .احجز موعدك اليوم وابدأ رحلتك نحو ابتسامة أكثر إشراقًا
          </Typography>

          <Button
            variant='contained'
            color='primary'
            sx={{
              px: 4,
              py: 1,
              fontSize: "2rem",
              borderRadius: "30px",
              textTransform: "capitalize",
              position: "relative",
              zIndex: "1",
            }}
            onClick={() => {
              setOpenModel((prev) => !prev);
            }}>
            احجز موعد الان
          </Button>
          {openModel && <ModelAppointment />}
        </div>
      </div>
      <Services />
      <About />
      <Doctors />
      <Contact />
    </>
  );
}
