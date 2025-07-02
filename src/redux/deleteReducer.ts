import axios from "axios"
import { ACTIONS } from "./Actions"

const intialState:any[] = []

export const deleteReducer = (state = intialState, action:{type:"create" | "delete" | "update" | "get", payload:any}) => {
    switch(action.type){
        case ACTIONS.create: {
            return (
                axios.delete(`http://localhost:3000/products/${action.payload}`)
            )
        }
        default:{
            return state
        }
    }
}