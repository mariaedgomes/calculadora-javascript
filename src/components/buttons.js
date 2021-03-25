import React, { Component } from "react";


class Button extends Component {

    handleClick() {
        if (this.props.onClick) 
            this.props.onClick();
    }

    render() {return(
        <div className={'button'} onClick = {this.handleClick.bind(this)}>
            {this.props.display}
        </div>)
    }
}

export default Button;