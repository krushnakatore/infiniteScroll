import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
        .then((res) => res.json())
        .then((res) => setData([...data, ...res.data]));
    };
    getData();
  }, [page]);

  const loadImages = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    if (
      window.scrollY + window.innerHeight >= // when it is reaching to end
      document.documentElement.scrollHeight
    ) {
      loadImages(); // i'm calling this function
    }
  };

  return (
    <div className="App">
      <div>
        {data.map((e, id) => {
          return (
            <div
              key={e._id}
              style={{
                padding: "5px",
                border: "1px solid green",
                borderRadius: "10px",
                backgroundColor: "#8D8DAA",
                margin: "auto",
                marginTop: "10px",
                width: "50%"
              }}
            >
              <h4>{id}</h4>
              <h4>{e.name}</h4>
              <h4>{e.trips}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
