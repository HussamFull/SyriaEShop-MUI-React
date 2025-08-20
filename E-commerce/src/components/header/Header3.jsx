import React from "react";

import { Container, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../theme";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Drawer from "@mui/material/Drawer";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
//import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';
import Links from "./Links";

export default function Header3() {
  // Drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // End  Drawer

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        bgcolor: theme.palette.myColor.main,
        borderRadius: 4,
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            },
          }}
        >
          <Paper
            sx={{
              width: 220,
              maxWidth: "100%",
              bgcolor: theme.palette.myColor.main,
            }}
          >
            <MenuList>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ElectricBikeOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Bikes</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LaptopChromebookOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Electronics</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <MenuBookOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Books</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SportsEsportsOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Games</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Categories"} />
          <Links title={"Brands"} />
          <Links title={"About Us"} />
          <Links title={"Contact Us"} />
          <Links title={"Services"} />
          <Links title={"Login"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          "& .MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 2, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": {
                color: "red",
                transform: "rotate(180deg)",
                transition: "0.3s transform, 0.3s color",
              },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close onClick={toggleDrawer("top", false)} />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: [] },
            {
              mainLink: "Categories",
              subLinks: [
                "Electronics",
                "Books",
                "Clothing",
                "Home Appliances",
                "Toys",
              ],
            },
            { mainLink: "Brands", subLinks: ["Samsung", "LG", "Semins"] },
            { mainLink: "About Us", subLinks: [] },
            { mainLink: "Contact Us", subLinks: ["phon", "Email"] },
            { mainLink: "Services", subLinks: ["Services1", "Services2"] },
            { mainLink: "Login", subLinks: ["Register", "Login"] },
          ].map((item) => (
            <Accordion
              key={item.mainLink}
              elevation={0}
              sx={{ bgcolor: "initial" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {/*
          قم بتغيير {item} إلى {item.mainLink} لعرض النص بشكل صحيح
        */}
                <Typography component="span">{item.mainLink}</Typography>
              </AccordionSummary>

              {/*
        هذا الجزء من الكود يعرض قائمة ثابتة، ولكي يكون ديناميكيًا يجب أن تقوم بعرض
        subLinks باستخدام .map() أيضًا.
      */}
              <List sx={{ py: 0, my: 0 }}>
                {item.subLinks.map((subItem) => (
                  <ListItem key={subItem} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={subItem} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
}
