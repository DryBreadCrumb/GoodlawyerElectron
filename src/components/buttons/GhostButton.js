import React from 'react';
import LoaderInline from './ButtonLoaderInline';

class GhostButton extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return (
            <div className={this.props.size === 'small' ? ('async-button-container small') : ('async-button-container large')}>
                {this.props.isLoading ? (
                    <span className={this.props.size === 'small' ? ('spacer') : ('spacer large')}>
                        <LoaderInline />
                    </span>
                ) : (
                    <button onClick={this.handleClick} className={this.props.size === 'small' ? ('button-small-primary overflow') : ('button-big-primary overflow')}>
                        <span>
                            {this.props.children}
                        </span>
                    </button>
                )}
            </div>
        );
    }
}

export default GhostButton;
