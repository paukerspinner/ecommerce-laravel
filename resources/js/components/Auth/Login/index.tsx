import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions';

class Login extends Component<any, any> {
    
    handleOnSubmit = (event: any) => {
        event.preventDefault();
        this.props.success_login({access_token: 'sdfsdfsdf'});
        console.log(this.props.state)
    }

    render() {
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                        <div className="row flex-grow">
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div className="auth-form-transparent text-left p-3">
                                    <h4>Welcome back!</h4>
                                    <form className="pt-3" onSubmit={this.handleOnSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="mdi mdi-account-outline text-primary"></i>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control form-control-lg border-left-0" id="exampleInputEmail" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword">Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="mdi mdi-lock-outline text-primary"></i>
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <label className="form-check-label text-muted">
                                                    <input type="checkbox" className="form-check-input" />
                                                    Keep me signed in
                                                </label>
                                            </div>
                                            <a href="#" className="auth-link text-black">Forgot password?</a>
                                        </div>
                                        <div className="my-3">
                                            <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">LOGIN</button>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light">
                                            Don't have an account? <a href="#" className="text-primary">Create</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 login-half-bg d-flex flex-row">
                                <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2018  All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        success_login: (payload: any) => {
            dispatch(actions.auth.success_login(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);