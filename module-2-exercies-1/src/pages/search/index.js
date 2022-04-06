import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GiphyItem from "../../components/GiphyItem";
import LimitFilter from "../../components/LimitFilter";
import SearchBox from "../../components/SearchBox";

const Search = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const forms = useSelector((state) => state.search.form);

  const getDataGif = () => {
    setIsLoading(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${forms.search}&limit=${forms.limit}`
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsLoading(false);
  };

  useEffect(() => {
    if (forms.limit) {
      getDataGif();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forms.limit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (forms.search.length <= 0) {
      setError(true);
      return;
    }
    getDataGif();
    setError(false);
  };

  return (
    <>
      <div className="layout" style={{ marginBottom: "54px" }}>
        <SearchBox
          error={error}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
        <LimitFilter />
        <p style={{ color: "red" }}>
          {error
            ? "Maaf kolom input anda kosong. Harap isi terlebih dahulu"
            : ""}
        </p>
        <p>Total data yang dicari ada {data?.length}</p>
        <div className="list-gif">
          {isLoading ? (
            <div>Loading..</div>
          ) : (
            data.map((item) => <GiphyItem key={item.id} data={item} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
