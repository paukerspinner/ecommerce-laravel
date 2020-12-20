import React, { Component } from 'react';

class Login extends Component<any, any> {
    render() {
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                        <div className="row flex-grow">
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div className="auth-form-transparent text-left p-3">
                                    <h4>Welcome back!</h4>
                                    <form className="pt-3">
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
                                            <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="#">LOGIN</a>
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

export default Login;