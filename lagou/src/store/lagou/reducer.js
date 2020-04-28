import lagouInit from "./state";
import {UPDATE_LAGOU,CHANGE_ISLOADING,CHANGE_ISERROR} from "./constant";
//reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state
export const reducer = (state=lagouInit,action) => {
    switch (action.type) {
        case UPDATE_LAGOU :{
            const {pageNo,totalCount,result} = action.payload;
            return {
                ...state,
                pageNo,
                totalCount,
                result:[...state.result,...result]
            }
        }
        case CHANGE_ISLOADING :{
            const isLoading = action.payload;
            return {
                ...state,
                isLoading
            }
        }
        case CHANGE_ISERROR :{
            const isError = action.payload;
            return {
                ...state,
                isError
            }
        }
        default:{
            return state;
        }
    }
}