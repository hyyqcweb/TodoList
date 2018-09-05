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

    render() {
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