import React from 'react';

class Textbox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="input-group">
                <span className="default-text-label">{this.props.label}</span>
                <input 
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                    placeholder={this.props.placeholder}
                    type="text" 
                    className="input-default" />
                <span className="error-text">{this.props.error}</span>
            </div>
        );
    }
}


export default Textbox;