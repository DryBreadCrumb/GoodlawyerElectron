import React from 'react';
import {connect} from 'react-redux';
import {setEmail, authenticate} from '../actions/userActions';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          email:'steve@example.com',
          password: 'User2Pass'
        };
        this.save = this.save.bind(this);
        this.handleClick= this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    save(){
        this.props.dispatch(setEmail(this.state.email));
        //this.props.dispatch(getLawyers());
    }

    handleClick(e){
        e.preventDefault();
        let user = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.dispatch(authenticate(user)).then(
          (result) => {
            console.log(result);
          }
        );
        //debugger;
        //console.log(token);
    }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }



    render() {
        return (
          <form>

            <label>Email</label>
            <input type="text" name="email" onChange={this.handleChange} />

            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange}/>

            <button onClick={this.handleClick}>Log In</button>
          </form>
        );
    }
}


const mapStateToProps = (state)=>{
    console.log(state);
    return {
        email: state.email,
        password: state.password
    };
};

export default connect(mapStateToProps)(Login);
