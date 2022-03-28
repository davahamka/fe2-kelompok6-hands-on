const SearchGif = ({ error, search, onSubmit, setSearch }) => {
  return (
    <div className="search-box">
      <input
        className={error ? "invalid" : ""}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search all GIFs and sticker"
      />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchGif;
