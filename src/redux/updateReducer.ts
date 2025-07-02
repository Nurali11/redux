import axios from "axios"
import { ACTIONS } from "./Actions"

const intialState:any[] = []

export const updateReducer = (state = intialState, action:{type:"create" | "delete" | "update" | "get", payload:any}) => {
    switch(action.type){
        case ACTIONS.create: {
            return (
                axios.patch("http://localhost:3000/products", action.payload)
            )
        }
        default:{
            return state
        }
    }
}