import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import QuoteItem from './QuoteItem';
import { getQuotes } from '../actions/quoteAction';
import Checkbox from './../Checkbox';

class QuotesOverview extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            quotes: {},
            isChecked:false,
        };

        this.check = this.check.bind(this);
    }

    componentWillMount(){
        this.props.dispatch(getQuotes());
    }

    check(isChecked){
        this.setState(() => {
            return {isChecked};
        });
    }

    render() {
        return (
            <div>
            <div className='sidebar-general'>
                <Sidebar/>
            </div>

            <div className="main-content">
                    <Checkbox 
                        text={'This is a checkbox demo'}
                        checked={this.state.isChecked}
                        check={this.check}
                    />
					<span className="login-sub-title">Quotes</span>
					<div>
						<QuoteItem quotes={this.props.quotes} />
					</div>
				</div>
        </div>
        );
    }
}

const mapStateToProps = (state,props) => {
    console.log(state);
    return {
        quotes:state.quoteReucer.quotes || {}
    }
}

export default connect(mapStateToProps)(QuotesOverview);