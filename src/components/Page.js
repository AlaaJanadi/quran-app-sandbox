import React from "react";
import axios from "axios";
export default function Page(props) {
  const [pageData, setPageData] = React.useState({});
  let [loaded, setLoaded] = React.useState(false);

  axios
    .get(`https://api.alquran.cloud/v1/page/${props.pageNum}/${props.edition}`).then(res => {
      setPageData(res.data.data.ayahs.map(ayah => {
        if (ayah.numberInSurah === 1) {
          return (
            <><h1>{ayah.surah.name}</h1>
              <p style={{ fontSize: "18px" }}>{ayah.text}</p></>

          );
        } else {
          return (
            <p style={{ fontSize: "18px" }}>{ayah.text}</p>
          );
        }

      })
      );
      setLoaded(true);
    })
    .catch(err => console.log(err)); console.log(pageData)

  return (
    <div dir="rtl">
      {loaded && pageData}

    </div>
  );
}
