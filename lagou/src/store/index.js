import {
  createStore,//创建仓库
  applyMiddleware,
  compose,
  combineReducers//将子 reducer 合并成一个大的 reducer
} from "redux";
import thunk from "redux-thunk";//dispatch 只能接受一个对象参数,这个中间件就是为了解决这个问题的

import {reducer as logouReducer} from "./lagou";
const rootReducer = combineReducers({
  lagou:logouReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//浏览器插件

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));//创建仓库

export default store;