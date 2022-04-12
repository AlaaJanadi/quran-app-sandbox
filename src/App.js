import React from "react";
import "./styles.css";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

import Header from "./components/Header";
import Menu from "./components/Menu";
import MainArea from "./components/MainArea";

export default function App() {

  let [menuState, setMenuState] = React.useState(false);
  function toggleMenu(state) {
    setMenuState(state);
  };

  const [quranAEditions, setQuranAEditions] = React.useState([]);
  let [quranSelectedEdition, setQuranSelectedEdition] = React.useState("quran-simple");
  const [page, setPage] = React.useState(604);

  function quranSelectedEditionHandler(e) {
    setQuranSelectedEdition(e.target.value);
  }

  React.useEffect(() => {
    axios
      .get(
        "https://api.alquran.cloud/v1/edition?format=text&language=ar&type=quran"
      )
      .then((res) => {
        setQuranAEditions(
          res.data.data.map((item, index) => {
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
                  {index == 12 ? 6 : index} - {item.name}
                </MenuItem>
              );
            } else {
              return "";
            }
          })
        );


      })
      .catch((err) => console.log(err));


  }, []);

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
      <MainArea />
    </div>
  );
}
