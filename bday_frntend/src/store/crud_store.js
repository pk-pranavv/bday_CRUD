import {createStore} from "redux"

const initialState={
    fullname:"",
    DOB:"",
    gender:"",
}
const crudReducer=(state=initialState,action)=>{
    if(action.type==='fullname'){
        return{
            ...state,
            fullname:action.value,
        }
    }
    if(action.type==='DOB'){
        return{
            ...state,
            DOB:action.value
        }
    }
    if(action.type==='gender'){
        return{
            ...state,
            gender:action.value
        }
    }
    return state;
}
const crudstore=createStore(crudReducer);
export default crudstore;
