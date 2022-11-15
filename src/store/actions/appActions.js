import { CONSTANTS } from "./Constants";
import { sortASCByPlansPrice } from "../../helper";
import { ITEMS_PER_PAGE } from "../../constants";

export const getApps = ({ name, page, search }) => {
  console.log({ name, page, search });
  return (dispatch) => {
    dispatch({ type: CONSTANTS.GET_APPS_LIST_LOADING });
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        let result = data;
        if (name) {
          result = result.filter((item) => item.categories.includes(name));
        }
        if (search) {
          result = result.filter((app) => app.name.includes(search) === true);
        }

        result = sortASCByPlansPrice(result);

        dispatch({
          type: CONSTANTS.GET_APPS_LIST,
          payload: {
            data: result.slice(
              (page - 1) * ITEMS_PER_PAGE,
              page * ITEMS_PER_PAGE
            ),
            total: result.length,
          },
        });
      });
  };
};
