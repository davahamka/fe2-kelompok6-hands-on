const ItemGif = ({ data }) => {
  return (
    <div>
      <img className="box-gif" src={data.url} alt={data.title} />
      <p className="title">{data.title}</p>
    </div>
  );
};

export default ItemGif;
