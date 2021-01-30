import React, { Component } from 'react';

class Login extends Component {
    render(){
        const {
            email,
            setEmail,
            password,
            setPassword,
            handleLogin,
            handleSignUp,
            hasAccount,
            setHasAccount,
            emailError,
            passwordError
        } = this.props;
    
        return(
            <section className="login">
                <div className="loginContainer">
                    <label>Email</label>
                    <input type="text"
                    autoFocus required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input type="password"
                    required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                            <button className="Authbutton" onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </>
                        ) : (
                            <>
                            <button className="Authbutton" onClick={handleSignUp}>Sign Up</button>
                            <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;