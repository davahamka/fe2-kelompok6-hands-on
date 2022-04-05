const GiphyItem = ({ data }) => {
  return (
    <div className="item-gif">
      <img
        className="box-gif"
        src={data.images.original.url}
        alt={data.title}
      />
      <p className="title">{data.title}</p>
      <div className={`rating `}></div>
    </div>
  );
};

export default GiphyItem;
