import { useDispatch, useSelector } from "react-redux";
import { formChange } from "../../slices/searchSlice";

const LimitFilter = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.search.form);
  return (
    <div className="limit-box">
      <p>Limit</p>
      <select
        value={form.limit}
        name="limit"
        onChange={(e) => dispatch(formChange(e))}
      >
        <option>10</option>
        <option>12</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};

export default LimitFilter;
