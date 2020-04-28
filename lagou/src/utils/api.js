import {get} from "./request";

export const fetchMoreLagouData = async (pageNo, pageSize) => {
    return await get("/listmore.json",{
        pageNo,
        pageSize
    })
}