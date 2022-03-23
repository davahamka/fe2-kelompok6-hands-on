import { useState } from "react";
import ItemGif from "../../components/ItemGif";
import SearchGif from "../../components/SearchGif";
import { gif } from "../../data";

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (search.length > 0) {
      alert(`Cari GIF ${search}`);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="layout">
      <SearchGif
        error={error}
        onSubmit={() => {
          onSubmit();
        }}
        search={search}
        setSearch={setSearch}
      />

      <div className="list-gif">
        <ItemGif data={gif} />
      </div>
    </div>
  );
};

export default Home;
