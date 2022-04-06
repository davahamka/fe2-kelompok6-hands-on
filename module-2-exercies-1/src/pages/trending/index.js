import { useState } from "react";
import { useEffect } from "react";
import GiphyItem from "../../components/GiphyItem";

const Trending = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");

  const getTrendingGif = () => {
    setStatus("pending");
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=20`
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data.data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("fail");
      });
  };

  useEffect(() => {
    getTrendingGif();
  }, []);

  return (
    <div className="layout">
      <h1>Trending</h1>
      <p></p>

      {status === "pending" ? (
        <p>loading...</p>
      ) : (
        <div className="list-gif">
          {data.map((item) => (
            <GiphyItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
