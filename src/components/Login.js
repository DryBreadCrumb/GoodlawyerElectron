import React from 'react';
import {connect} from 'react-redux';
import {setEmail, authenticate} from '../actions/userActions';
import createElectronStore from 'electron-store-webpack-wrapper';

const store = new createElectronStore();

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          email:'steve@example.com',
          password: 'User2Pass',
          authStatus: ''
        };
        this.save = this.save.bind(this);
        this.handleClick= this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.check = this.check.bind(this);
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
            if (result == 'invalid')
            {
              this.setState({authStatus: 'Invalid Login'});
            }
            else {
              this.setState({authStatus: 'Logging in'});
              console.log('Storing', result);
              store.set('jwt', result);
          }
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

    check(e){
      e.preventDefault();
      console.log('Stored JWT', store.get('jwt'));
    }

    render() {
        return (
          <form className='Login-Form'>
            <div>
              <label className='Login-EmailText'>Email</label>
              <input type="text" name="email" className='Login-EmailInput' onChange={this.handleChange} />
            </div>

            <div>
              <label className='Login-PasswordText'>Password</label>
              <input type="password" name="password" onChange={this.handleChange}/>
            </div>

            <div>
              <button onClick={this.handleClick}>Log In</button>
              <button onClick={this.check}>Check</button>
            </div>

            <div>
              <label>{this.state.authStatus}</label>
            </div>
          </form>
        );
    }
}


const mapStateToProps = (state)=>{
    console.log(state);
    return {
        email: state.email,
        password: state.password,
        authStatus: state.authStatus
    };
};

export default connect(mapStateToProps)(Login);
