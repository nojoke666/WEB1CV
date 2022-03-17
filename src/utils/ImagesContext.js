import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { INIT, initialState, NEXT, PREV, reducer } from "./imagesReducer";
import useLocalStorage from "../hooks/useLocalStorage";

export const ImagesContext = createContext();

export const ImagesProvider = (props) => {
  const { setState } = useLocalStorage("images", []);
  const [{ index, images, loaded }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const downloadImages = async () => {
      let i = 0;
      let data = [];
      for (i; i < 10; i++) {
        const pics = await axios
          .get("https://api.waifu.pics/sfw/waifu")
          .catch((err) => {
            console.log(err);
          });
        data = [pics.data, ...data];
      }
      dispatch({ type: INIT, payload: data });
      setState(data);
    };

    downloadImages();
  },);

  const next = () => {
    dispatch({ type: NEXT });
  };

  const prev = () => {
    dispatch({ type: PREV });
  };

  return (
    <ImagesContext.Provider
      {...props}
      value={{ images, loaded, next, prev, index }}
    />
  );
};
