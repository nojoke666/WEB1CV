export const ADD = "add"
export const REMOVE = "remove"
export const INIT = "init"

export const initialState = []

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      if (state.includes(payload)) {
        return state
      }
      return [...state, payload]
    case REMOVE:
      return state.filter((favourite) => favourite !== payload)
    default:
      throw new Error("unknown type")
  }
}
