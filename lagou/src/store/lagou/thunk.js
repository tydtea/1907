import {fetchMoreLagouData} from "../../utils/api";
import {updateLagou,changeIsLoading,changeIsError} from "./action";

export const loadMoreLagouData = (pageNo = 1, pageSize) => (
    (dispatch) => {
        dispatch(changeIsLoading(true));//请求前更改isLoading
        dispatch(changeIsError(false));//catch之后再次请求
        fetchMoreLagouData(pageNo, pageSize).then(res => {
            dispatch(updateLagou(res.data.content.data.page))
            dispatch(changeIsLoading(false));//请求后更改isLoading
        }).catch(err => {
            //走catch的情况下
            dispatch(changeIsError(true));
            //走catch的情况下上面给了错误信息 需要改isLoading
            dispatch(changeIsLoading(false));
        })
    }
)