import { CONSTANTS } from "../actions/Constants";

const initialState = {
  categories: null,
  loading: false,
};

export default function categoryReducer(
  state = initialState,
  { type, payload }
) {
  const newState = { ...state };
  switch (type) {
    case CONSTANTS.GET_CATEGORY_LIST_LOADING: {
      return {
        ...newState,
        loading: true,
      };
    }
    case CONSTANTS.GET_CATEGORY_LIST: {
      const sortedCategories = payload.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      return {
        ...newState,
        loading: false,
        categories: [...sortedCategories],
      };
    }

    default: {
      return newState;
    }
  }
}
