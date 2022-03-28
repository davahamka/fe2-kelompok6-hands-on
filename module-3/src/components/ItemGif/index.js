const ItemGif = ({ data }) => {
  return (
    <div className="item-gif">
      <img className="box-gif" src={data.url} alt={data.title} />
      <p className="title">{data.title}</p>
      <div className={`rating `}>
        <p className={`${data.rating === "g" ? "rating-g" : "rating-pg"}`}>
          {" "}
          {data.rating}
        </p>
      </div>
    </div>
  );
};

export default ItemGif;
