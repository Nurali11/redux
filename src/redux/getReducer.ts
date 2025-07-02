import { ACTIONS } from "./Actions"
import { getProducts } from "../service/getData"

const initialState: any = []

export const getReducer = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ACTIONS.get:
      let res = getProducts()
      return {
        state: res
      }
    default:
      return state
  }
}
