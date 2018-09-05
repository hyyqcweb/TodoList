import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleClick = () => {
        const {deteleItem, index} = this.props;
        deteleItem(index)
    }
    // 当一个组件从父组件接受了参数
    // 只要父组件的render函数被重新执行了,子组件的这个生命周期函数就会被执行了
    // 如果这个组件第一次存在于父组件中,不会执行
    // 如果这个组件之前已经存在于父组件中,才会执行
    componentWillReceiveProps() {
      console.log('child componentWillReceiveProps')
    }
	// 当这个组件卸载(移除)的时候,调用
    componentWillUnmount() {
    	console.log('child componentWillUnmount');
    }

    render() {
    	console.log('child render')
        const {content} = this.props;
        return (
            <div
            onClick={this.handleClick}
            dangerouslySetInnerHTML={{
                __html: content
            }}
            />
        )
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 既可以是数字又可以string
    deteleItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}