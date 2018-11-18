import React from 'react';
import {connect} from 'react-redux';
import {setFirstName, getLawyers} from '../actions/userActions';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {firstName:''}
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    save(){
        this.props.dispatch(setFirstName(this.state.firstName));
        this.props.dispatch(getLawyers());
    }

    onChange(e){
        let firstName = e.target.value;
        this.setState(()=>{return {firstName}})
    }

    render() {
        return (
            <div>
                <button onClick={this.save}>Click</button>
                <span className='login-NameSpan'>
                    {this.props.firstName}
                </span><input value={this.state.firstName} onChange={this.onChange} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        firstName: state.firstName
    }
}

export default connect(mapStateToProps)(Login);
