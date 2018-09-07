import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoSages from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer)
sagaMiddleware.run(todoSages)

// store是唯一的
// 只有store才能改变自己的内容
// Reducer 必须是纯函数
export default store;