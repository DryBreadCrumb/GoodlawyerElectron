import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import QuoteItem from './QuoteItem';
import { getQuotes } from '../actions/quoteAction';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import Textbox from './Textbox';
import DotMenu from './DotMenu';

class QuotesOverview extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            quotes: {},
            isChecked:false,
            value:'',
        };

        this.check = this.check.bind(this);
    }

    // eslint-disable-next-line react/no-deprecated
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
                        text={'This is a checkbox example'}
                        checked={this.state.isChecked}
                        check={this.check}
                    />
                    <Textbox 
                        label={'Textbox'}
                        placeholder={'This is a textbox example'}
                        error={'error'}
                    />
                    <Textbox 
                        label={'Textbox'}
                        placeholder={'This is a textbox example'}
                    />
                    <TextArea 
                        label={'TextArea'}
                        placeholder={'This is a textarea example'}
                    />
                    <DotMenu 
                        id={'id'}
                        placeholder={'This is a textarea example'}
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
    };
};

export default connect(mapStateToProps)(QuotesOverview);