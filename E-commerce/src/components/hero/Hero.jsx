import { Container, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Link from "@mui/material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Translate } from "@mui/icons-material";
import { Pagination } from "swiper/modules";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import Button from "@mui/material/Button";


export default function Hero() {
  const theme = useTheme();
  const mySlider = [
    { text: "MEN", link: "./src/images/banner-15.jpg" },
    { text: "WOMEN", link: "../src/images/banner-25.jpg" },
  ]

  return (
    <Container
      sx={{
        mt: 2.5,
        // borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }, // يغير اتجاه العناصر على الشاشات الصغيرة
        gap: { xs: 1, md: 2 }, // يغير المسافة بين العناصر على الشاشات الصغيرة
      }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


        {mySlider.map((item) => {

       return(

      
         

        <SwiperSlide  key={item.link} className="parent-slider">
          <img
            src={item.link}
            alt="Hero"
            style={{ width: "100%" , height: "auto" }} // يضبط عرض الصورة داخل الـ Swiper
          />
          <Box 
        sx={{
    [theme.breakpoints.up('sm')]: {
        position: "absolute", left: "10%", textAlign: "left"
    },

    [theme.breakpoints.down('sm')]: {
        pt: 4,
        pb: 6
    },
}}
          //sx={{  position: "absolute",left: "10%",top: "50%",ransform: "translateY(-50%)",textAlign: "left"}}
          
          
          
          
          >
            <Typography
              variant="h6"
              sx={{
                color: "#222",
          fontWeight: 300,
          mb: 1, // إضافة هامش سفلي
                //fontWeight: "bold",
                //fontSize: { xs: "24px", md: "48px" }, // يغير حجم الخط على الشاشات الصغيرة
              }}
            >
              LIFESZYLE COLLECTION 3,4 
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#222",
          fontWeight: "bold",
                //fontSize: { xs: "14px", md: "24px" }, // يغير حجم الخط على الشاشات الصغيرة
              }}
            >
              {item.text}
            </Typography>

            <Stack
            sx={{
              justifyContent: { xs: "center", sm: "flex-start"   },
            }}
        direction={"row"  }
        alignItems={"center"}
            >
        <Typography color="#222" mr={1} variant="h5">
                SALE UP TO
              </Typography>
        <Typography color="#E74C3C" variant="h5" >
                30% OFF
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: "#000",
                fontWeight: 300,
                my: 1,
              }}
              variant="body1"
            >
              Get Free Shipping on orders over $99.00
            </Typography>

            <Button
              sx={{
                px: 5,
                py: 1.5,
          mt: 3, // زيادة الهامش العلوي
                backgroundColor: "#222",
                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                color: "#fff",
                borderRadius: "4px",
                "&:hover": {
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                },
              }}
              variant="contained"
            >
               SHOP NOW
            </Button>
          </Box>
        </SwiperSlide>

       )} )}




      </Swiper>

      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // إخفاء العناصر على الشاشات الصغيرة
          flexDirection: "column",
          gap: 2,
          minWidth: "26.6%",
          width: { xs: "100%", md: "30%" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img
            src=".\src\images\banner-17.jpg"
            alt="Hero"
            style={{ borderRadius: "8px", width: "100%", }}
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "1px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src=".\src\images\banner-16.jpg"
            alt="Hero"
            style={{ width: "100%", borderRadius: "8px", height: "100%" }}
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
              p: 1.5,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "1px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
