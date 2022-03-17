import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  )

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [state, key])

  const deleteValue = (id) => {
    setState(state.filter((s) => s !== id))
  }

  const addValue = (id) => {
    setState([...state, id])
  }

  return { state, addValue, deleteValue, setState }
}

export default useLocalStorage
