import React from 'react';
import LoaderInline from './ButtonLoaderInline';

class AsyncButton extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(!this.props.isLoading && typeof this.props.onClick !== 'undefined'){
            this.props.onClick();
        }
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

export default AsyncButton;