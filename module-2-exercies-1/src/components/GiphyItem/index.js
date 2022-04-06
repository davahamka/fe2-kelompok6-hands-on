import { useHistory } from "react-router-dom";

const GiphyItem = ({ data }) => {
  const history = useHistory();

  const handleClick = (data) => {
    history.push({
      pathname: `/gif/${data.id}`,
      state: {
        data,
      },
    });
  };

  return (
    <div
      className="item-gif"
      onClick={() => {
        handleClick(data);
      }}
    >
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
