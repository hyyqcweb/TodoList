import React, { Component, Fragment } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <input type="text"/><button>提交</button>
        <ul>
          <li>学英语</li>
          <li>学英语</li>
        </ul>
      </Fragment>
    );
  }
}