import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="AppBar" position="static">
        <Toolbar>
          <IconButton
            className="icons"
            size="large"
            edge="start"
            name="btnOpenMenu"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => props.toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            className="icons"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <img className="logoImg" src="../images/logo.png" alt="logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
