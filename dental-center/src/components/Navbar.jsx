/** @format */
import logo from "../images/tooth (1).png";
import "../Css fills/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "الصفحة الرئسية", path: "/" },
    { label: "خدماتنا", path: "/services" },
    { label: "من نحن؟", path: "/about" },
    { label: "أطبائنا", path: "/doctors" },
    { label: "تواصل معنا", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          boxShadow: "0px 0px 10px gray",
          direction: "ltr",
        }}>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}>
            <img src={logo} alt='' className={"logo"} />
            أسنانك أولويتنا
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge='end' onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    width: "150px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                  onClick={toggleDrawer(false)}>
                  {navLinks.map(({ label, path }) => (
                    <Link to={path} key={label}>
                      <Button sx={{ padding: "10px" }}>{label}</Button>
                    </Link>
                  ))}
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navLinks.map(({ label, path }) => (
                <Link to={path} style={{ color: "#eceff1" }} key={label}>
                  <Button style={{ color: "#eceff1", fontSize: "20px" }}>
                    {label}
                  </Button>
                </Link>
              ))}
              <Link to='/login'>
                <Button
                  style={{
                    color: "#eceff1",
                    border: "1px solid #eceff1 ",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}>
                  سجل دخول
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
