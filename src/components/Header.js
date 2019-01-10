import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);

        this.renderButtons = this.renderButtons.bind(this);
    }

    renderButtons(buttons) {
        let output = '';

        return buttons.join(' ');
    }

    render() {
        return (
            <div className="header-outer">
                <div className="header-title">{this.props.title}</div>
                <div className="header-subtitle">{this.props.subtitle}</div>
                <div className="header-buttons">{this.renderButtons(this.props.buttons)}</div>
            </div>
        );
    }
}

export default Header;