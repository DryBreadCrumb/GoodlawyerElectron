import React from 'react';
import {Popover,PopoverBody} from 'reactstrap';

class DotMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleDropdown = this.toggleDropdown.bind(this);

		this.state = {
            dropdownIsOpen:false
        };

        render(){
            return (
                <Popover placement="bottom" 
                    isOpen={this.state.dropdownIsOpen} 
                    target={'PopoverPriceBreakdown'+this.props.item._id} 
                    toggle={this.toggleDropdown}
                    >
                    <PopoverBody>
                        <button className="button-popover" onClick={this.handleEdit}>Edit</button>
                        <button className="button-popover" onClick={this.handleDelete}>Delete</button>
                    </PopoverBody>
                </Popover>
            );
        }
    }
    
    
}

export default DotMenu;