import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/loginAction';

require('./LoginContainer.css');

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='layer'>
                    <div className='login-card'>
                        <div className='login-header'>Log In</div>
                        <div className='login-inputs_container'>
                            <div className='login-input_email'>
                                <input type="email" onChange={this.handleEmailInput.bind(this)} />
                            </div>
                            <div className='login-input_password' >
                                <input type="password" onChange={this.handlePassInput.bind(this)} />
                            </div>
                            <div>
                                <button onClick={this.onSubmit.bind(this)}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleEmailInput(event) {
        this.setState({ email: event.target.value });
    }

    handlePassInput(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit() {
        this.props.login(this.state);
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);