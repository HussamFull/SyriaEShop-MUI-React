import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

const options = ["AR", "EN", "DE"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "1px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,

      }}
    >
      <Container >
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          SyriaEShop
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Free Express Shipping
        </Typography>

        <Box flexGrow={1} />

        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{ fontSize: "16px" }} />
            </IconButton>
          )}
        </div>

        <List component="nav" aria-label="Device settings" sx={{ p: 0, m: 0 }}>
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{
              p:1,
              "&:hover": {
                fontSize: "11px",
                color: "#fff",
                cursor: "pointer",
                //p: 1,
              },
            }}
          >
            <ListItemText
              sx={{ ".MuiTypography-root": { fontSize: "11px", color:"#fff",
                
          transition: "font-size 0.3s ease", // أضف انتقالًا لجعل التغيير سلسًا

               } }}
              secondary={options[selectedIndex]}
            />
            <ExpandMore
              sx={{
                color: "#fff",
                fontSize: "16px",
              }}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "lock-button",
              role: "listbox",
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <TwitterIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </Stack>
      </Container>
    </Box>
  );
}
