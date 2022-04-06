import { useLocation } from "react-router-dom";

const GifDetail = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);

  console.log(window.history);
  return (
    <div
      className="layout"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "400px" }}>
        <div className="item-gif">
          <img
            className="box-gif"
            src={data.images.original.url}
            alt={data.title}
          />
          <p className="title">{data.title}</p>
          <div className={`rating `}></div>
        </div>
      </div>
    </div>
  );
};

export default GifDetail;
