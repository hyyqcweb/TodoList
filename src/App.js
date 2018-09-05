import React , { Component, Fragment } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleToggole = this.handleToggole.bind(this)
    }
    handleToggole() {
        this.setState(() => ({
            show: this.state.show ? false : true
        }))
    }
    render() {
        return (
            <Fragment>
	            <CSSTransition
					in={this.state.show}
					timeout={1000}
					classNames='fade'
					unmountOnExit
					onEntered={(el) => {
						return el.style.color='blue';
					}}
					appear={true}
	            >
	            	<div>hello</div>
	            </CSSTransition>
            	<button onClick={this.handleToggole}>toggole</button>
			</Fragment>
        )
    }
}