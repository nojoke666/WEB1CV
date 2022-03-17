export const PREV = "prev"
export const NEXT = "next"
export const INIT = "init_images"

export const initialState = {
  index: 0,
  loaded: false,
  images: [],
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case NEXT:
      return { ...state, index: (state.index + 1) % state.images.length }
    case PREV:
      return {
        ...state,
        index: (state.index - 1 + state.images.length) % state.images.length,
      }
    case INIT:
      return { ...state, images: payload, loaded: true }
    default:
      throw new Error("unknown type")
  }
}
