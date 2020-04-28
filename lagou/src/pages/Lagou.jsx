import React, {Component} from 'react';
import {connect} from "react-redux";
// import {bindActionCreators} from "redux";//不懂

import {loadMoreLagouData} from "../store/lagou/thunk"

class Lagou extends Component {
    constructor(props) {
        super(props);
        this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
    }

    componentDidMount() {
        const {loadMoreData} = this.props;
        const lagouInfo = this.props.lagou.result;
        if(lagouInfo.length<1)//重点讲一下
            loadMoreData(1)
    }
    //加载更多
    onLoadMoreClick(){
        const {lagou,loadMoreData} = this.props;
        loadMoreData( lagou.pageNo + 1)
    }
    render() {
        const lagouInfo = this.props.lagou.result;
        return (
            <div>
                {
                    lagouInfo.map(v=>(
                        <div key={v.positionId}>
                            <h3>招聘职位：{v.positionName}</h3>
                            <img src={"https://www.lgstatic.com/"+v.companyLogo} alt="" style={{width:'60px'}}/>
                            <h5>发布时间：{v.createTime}</h5>
                            <h4>薪资：{v.salary}</h4>
                        </div>
                    ))
                }
                <button  onClick={this.onLoadMoreClick}>{this.props.isLoading?"加载中...":"加载更多"}</button>
            </div>
        );
    }
}

const mapStateTopProps = (state) => ({
    lagou: state.lagou,
    isLoading: state.lagou.isLoading
})
const mapDispatchToProps = (dispatch) => ({
    loadMoreData: (pageNo, pageSize) => dispatch(loadMoreLagouData(pageNo, pageSize))

})
export default connect(mapStateTopProps, mapDispatchToProps)(Lagou);