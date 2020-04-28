import {UPDATE_LAGOU,CHANGE_ISLOADING,CHANGE_ISERROR} from "./constant";
export const updateLagou = (payload)=>({
    type:UPDATE_LAGOU,
    payload
})
export const changeIsLoading = (payload)=>({
    type:CHANGE_ISLOADING,
    payload

})
export const changeIsError = (payload)=>({
    type:CHANGE_ISERROR,
    payload
})