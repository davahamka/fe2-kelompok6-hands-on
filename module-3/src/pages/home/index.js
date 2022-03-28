import { useEffect, useState } from "react";
import CategoryFilter from "../../components/CategoryFilter";
import Header from "../../components/Header";
import ItemGif from "../../components/ItemGif";
import SearchGif from "../../components/SearchGif";
import { gif, dataGif } from "../../data";

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("g");
  const [xx, setXx] = useState("");

  const dataRating = dataGif.map((v) => v.rating);

  const dataFilter = dataRating.filter((v, i, a) => a.indexOf(v) === i);

  const onSubmit = () => {
    if (search.length > 0) {
      alert(`Cari GIF ${search}`);
      setError(false);
    } else {
      setError(true);
    }
  };

  const filteredData = dataGif.filter((v, i) => v.rating === filter);

  useEffect(() => {});

  return (
    <>
      <Header />
      <div className="layout">
        <SearchGif
          error={error}
          search={search}
          setSearch={setSearch}
          onSubmit={() => {
            onSubmit();
          }}
        />

        <CategoryFilter
          dataFilter={dataFilter}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="list-gif">
          {filter === ""
            ? dataGif.map((item) => <ItemGif key={item.id} data={item} />)
            : filteredData.map((item) => <ItemGif key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
