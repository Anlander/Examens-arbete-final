import React from 'react'
import { connect } from 'react-redux'
import RegisterForm from './Components/auth/registerForm'
import { register } from '../actions'

const Register = (props) => {

  const registerUser = (userData) => {
    props.dispatch(register(userData))
      .then((_) => {
      }, (errorMessage) => {
      })
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Register</h3>
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            <RegisterForm onRegister={registerUser} />
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default connect()(Register)
