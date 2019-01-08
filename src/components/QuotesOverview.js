import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import QuoteItem from './QuoteItem';
import { getQuotes } from '../actions/quoteAction';

class QuotesOverview extends React.Component {

    constructor(props){
        super(props);

        this.state = {
			quotes: {}
        };
    }

    componentWillMount(){
        this.props.dispatch(getQuotes());
    }

    render() {
        return (
            <div>
            <div className='sidebar-general'>
                <Sidebar/>
            </div>

            <div className="main-content">
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