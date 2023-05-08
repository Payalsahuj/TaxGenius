import { ADD_DATA, CHANGE, GET_DATA } from "./actiontype"

const initial={
    auth:false,
    data:[]
}
export const reducer=(state=initial,action)=>{
    switch(action.type){
        case ADD_DATA:{
            return {...state,data:[...state.data,action.payload]}
        }
        case GET_DATA:{
            return {...state,data:action.payload}
        }
        case CHANGE:{
            return {...state,auth:true}
        }
        default:{
            return state
        }
    }
}