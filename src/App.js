import React from "react";
import "./styles.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Page from "./components/Page";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

export default function App() {
  let [menuState, setMenuState] = React.useState(false);
  console.log(menuState);
  const toggleMenu = (state) => {
    setMenuState(state);
  };

  const [quranAEditions, setQuranAEditions] = React.useState([]);
  let [quranSelectedEdition, setQuranSelectedEdition] = React.useState("");

  function quranSelectedEditionHandler(e) {
    console.log(e.target.value);
    setQuranSelectedEdition(e.target.value);
  }

  React.useEffect(() => {
    axios
      .get(
        "https://api.alquran.cloud/v1/edition?format=text&language=ar&type=quran"
      )
      .then((res) => {
        setQuranAEditions(
          res.data.data.map((item) => {
            console.log(item.identifier);
            if (
              item.identifier.includes("simple") ||
              item.identifier.includes("uthmani")
            ) {
              return (
                <MenuItem
                  dir="rtl"
                  key={item.identifier}
                  value={item.identifier}
                >
                  {item.name}
                </MenuItem>
              );
            } else {
              return "";
            }
          })
        );
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <Menu
        menuState={menuState}
        toggleMenu={toggleMenu}
        quranAEditions={quranAEditions}
        quranSelectedEdition={quranSelectedEdition}
        quranSelectedEditionHandler={quranSelectedEditionHandler}
      />
      <Page />
    </div>
  );
}
