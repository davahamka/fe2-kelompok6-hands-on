import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { formChange } from "../../slices/searchSlice";

const SearchBox = ({ error, isLoading, handleSubmit }) => {
  const form = useSelector((state) => state.search.form);
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box">
        <input
          name="search"
          className={error ? "invalid" : ""}
          value={form.search}
          onChange={(e) => dispatch(formChange(e))}
          placeholder="Search all GIFs and sticker"
        />

        <button>
          {isLoading ? (
            <ClipLoader size={20} color="white" loading={true} />
          ) : (
            "Search"
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
