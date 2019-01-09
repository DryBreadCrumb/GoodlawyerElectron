import React from 'react';
import {Popover,PopoverBody} from 'reactstrap';

class DotMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);

		this.state = {
            dropdownIsOpen:false
        };
    }

    edit(){
        this.props.edit(this.props.item);
        this.toggle();
    }

    delete(){
        this.props.delete(this.props.item);
        this.toggle();
    }

    toggle(){
        this.setState(() => {
            return {isMoreOpen:!this.state.isMoreOpen}
        })
    }

    render(){
        return (
            <div className="dotmenu container">
                <i onClick={this.toggle} id={this.props.id} className="dotmenu material-icons">
                    more_vert
                </i>
                <Popover placement="bottom" 
                    isOpen={this.state.dropdownIsOpen} 
                    target={this.props.id}
                    toggle={this.toggleDropdown}
                    >
                    <PopoverBody>
                        <button className="button-popover" onClick={this.handleEdit}>Edit</button>
                        <button className="button-popover" onClick={this.handleDelete}>Delete</button>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
    
}

export default DotMenu;