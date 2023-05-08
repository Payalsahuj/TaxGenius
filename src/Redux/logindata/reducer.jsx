import { POST_DATA, POST_details } from "./actiontype"


const initial={
    auth:false,
    data:[],
    usersdetail:[]
}
export const reducer=(state=initial,action)=>{
    switch(action.type){
        case POST_DATA:{
            
            return {...state,data:[...state.data,action.payload],auth:true}
        }
        case POST_details:{
            return {...state,usersdetail:[...state.usersdetail,action.payload]}
        }
        default:{
            return state
        }
    }
}