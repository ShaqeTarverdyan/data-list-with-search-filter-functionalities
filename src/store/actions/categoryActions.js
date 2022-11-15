import { CONSTANTS } from "./Constants";

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: CONSTANTS.GET_CATEGORY_LIST_LOADING });
    fetch("categories.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: CONSTANTS.GET_CATEGORY_LIST,
          payload: data,
        });
      });
  };
};
