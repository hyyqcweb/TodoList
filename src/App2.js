import React , { Component, Fragment } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
    render() {
        return (
            <Fragment>
	            <TransitionGroup>
	            	{
			            this.state.list.map((item, index) => {
			                return (
			                	<CSSTransition
									timeout={1000}
									classNames='fade'
									unmountOnExit
									onEntered={(el) => {
										return el.style.color='blue';
									}}
									appear={true}
									key={index}
					            >
			                    	<div>{item}</div>
			                    </CSSTransition>
			                )
			            })
		            }
	            </TransitionGroup>
            	<button onClick={this.handleAddItem}>toggole</button>
			</Fragment>
        )
    }
}