import { CONSTANTS } from "../actions/Constants";

const initialState = {
  apps: [],
  loading: false,
  total: "",
  searchedResult: [],
};

export default function appReducer(state = initialState, { type, payload }) {
  const newState = { ...state };
  switch (type) {
    case CONSTANTS.GET_APPS_LIST_LOADING: {
      return {
        ...newState,
        loading: true,
      };
    }
    case CONSTANTS.GET_APPS_LIST: {
      return {
        ...newState,
        loading: false,
        apps: [...payload.data],
        total: payload.total,
      };
    }

    case CONSTANTS.SEARCH_APP: {
      return {
        ...newState,
        searchedResult: [...payload],
      };
    }
    default: {
      return newState;
    }
  }
}
