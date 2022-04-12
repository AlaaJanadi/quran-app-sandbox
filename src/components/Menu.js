import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

export default function Menu(props) {
  return (
    <SwipeableDrawer
      PaperProps={{
        sx: { width: "30%" }
      }}
      dir="rtl"
      anchor="left"
      open={props.menuState}
      onClose={() => props.toggleMenu(false)}
      onOpen={() => props.toggleMenu(true)}
    >
      <IconButton
        size="large"
        color="error"
        onClick={() => props.toggleMenu(false)}
      >
        <CancelPresentationIcon />
      </IconButton>
      <FormControl sx={{ m: 2 }} dir="rtl">
        <InputLabel id="demo-simple-select-label">نسخة القرآن</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="نسخة القرآن"
          value={props.quranSelectedEdition}
          onChange={props.quranSelectedEditionHandler}
        >
          {props.quranAEditions}
        </Select>
      </FormControl>
    </SwipeableDrawer>
  );
}
