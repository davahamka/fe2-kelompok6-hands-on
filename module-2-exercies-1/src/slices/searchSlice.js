import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    form: {
      search: "",
      limit: "12",
    },
    error: false,
    data: [],
  },
  reducers: {
    formChange: (state, action) => {
      const { name, value } = action.payload.target;
      console.log(value);
      state.form = {
        ...state.form,
        [name]: value,
      };
    },
    handleSubmit: (state, action) => {},
  },
});

export const { formChange } = searchSlice.actions;

export default searchSlice.reducer;
