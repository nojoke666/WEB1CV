import React, { createContext, useReducer } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { ADD, initialState, reducer, REMOVE } from "./favouritesReducer"

export const FavouritesContext = createContext()

export const FavouritesProvider = (props) => {
  const { deleteValue, addValue, state } = useLocalStorage(
    "favourites",
    initialState
  )
  const [favourites, dispatch] = useReducer(reducer, state)

  const add = (id) => {
    dispatch({ type: ADD, payload: id })
    addValue(id)
  }

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: id })
    deleteValue(id)
  }

  return (
    <FavouritesContext.Provider
      {...props}
      value={{ favourites, add, remove }}
    />
  )
}
