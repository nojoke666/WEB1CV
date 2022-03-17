import axios from "axios";
import { ANIME_ACTIONS } from "../constants/action-types";

export const getOneQuote = () => {
  return async (dispatch) => {
    dispatch({ type: ANIME_ACTIONS.ANIME_LOADING });
    await axios
      .get("https://animechan.vercel.app/api/random", {
 
      })
      .then((response) => {
        dispatch({ type: ANIME_ACTIONS.ANIME_LOADED, payload: response.data });
      })
      .catch((err) => {
        dispatch({
          type: ANIME_ACTIONS.ANIME_ERROR,
          payload: err.response.data,
        });
        console.log(err.message);
      });
  };
};

export const getQuoteByTitle = (title) => {
  return async (dispatch) => {
    dispatch({ type: ANIME_ACTIONS.ANIME_LOADING });
    await axios
      .get(
        "https://animechan.vercel.app/api/quotes/anime",
        {params: { title: title }},
        {
          //headers: { Authorization: token },
        }
      )
      .then((response) => {
        dispatch({ type: ANIME_ACTIONS.ANIME_LOADED, payload: response.data });
      })
      .catch((err) => {
        dispatch({
          type: ANIME_ACTIONS.ANIME_ERROR,
          payload: err.response.data,
        });
        console.log(err.message);
      });
  };
};

export const getQuoteByName = (name) => {
    return async (dispatch) => {
      dispatch({ type: ANIME_ACTIONS.ANIME_LOADING });
      await axios
        .get(
            "https://animechan.vercel.app/api/quotes/character", 
          {params: { name: name }},
          {
      
          }
        )
        .then((response) => {
          dispatch({ type: ANIME_ACTIONS.ANIME_LOADED, payload: response.data });
        })
        .catch((err) => {
          dispatch({
            type: ANIME_ACTIONS.ANIME_ERROR,
            payload: err.response.data,
          });
          console.log(err.message);
        });
    };
  };
