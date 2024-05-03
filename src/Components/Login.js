import React from "react"
const Login=()=>{
    return(
        <div className="container">
            <h3>Welcome back</h3>
            <div className="login-form">
                <form>
                    <input type="email"
                    name="email"
                    placeholder="Enter email"/>
                    <input type="password"
                    name="password"
                    placeholder="password"/>
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;