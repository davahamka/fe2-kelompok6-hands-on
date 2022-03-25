const CategoryFilter = ({ dataFilter, filter, setFilter }) => {
  return (
    <div className="filter-list-box">
      <p>Filter</p>
      <div
        className={`filter-item-box ${filter === "" && "selected"}`}
        onClick={() => {
          setFilter("");
        }}
      >
        All
      </div>
      {dataFilter.map((item, idx) => (
        <div
          key={idx}
          className={`filter-item-box ${filter === item && "selected"}`}
          onClick={() => {
            setFilter(item);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
