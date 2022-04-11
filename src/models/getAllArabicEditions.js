import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

export default function GetAllArabicEditions() {
  var config = {
    method: "get",
    url:
      "https://api.alquran.cloud/v1/edition?format=text&language=ar&type=quran",
    headers: {}
  };

  let quranAEdition;

  axios(config)
    .then(function (response) {
      const res = response.data;
      quranAEdition = res.data.map((edition) => {
        return (
          <MenuItem
            dir="rtl"
            key={edition.identifier}
            value={edition.identifier}
          >
            {edition.name}
          </MenuItem>
        );
      });
      return quranAEdition;
    })
    .catch(function (error) {
      console.log(error);
    });
}
