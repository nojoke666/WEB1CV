import { ANIME_ACTIONS } from "../constants/action-types";

const initialState = {
  anime: [],
  status: false,
  message: "",
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANIME_ACTIONS.ANIME_LOADING:
      return Object.assign({}, state, {
        anime: [],
        status: false,
        message: "",
      });
    case ANIME_ACTIONS.ANIME_LOADED:
      return Object.assign({}, state, {
        anime: action.payload,
        status: true,
        message: "",
      });
    case ANIME_ACTIONS.ANIME_ERROR:
      return Object.assign({}, state, {
        anime: [],
        status: false,
        message: action.payload,
      });

    default:
      return state;
  }
};

export default animeReducer;
