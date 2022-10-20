import React from 'react'
import './Form.css'
import { useState } from 'react'
const Form = () => {
    var fname_inc = 0;
    var fname_inc = 0;
    var fname_inc = 0;
    var fname_inc = 0;
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    function updateFname(e) {
        var fname_inc = 0;
        console.log(e.target.value);
        setFname(e.target.value);
        var a = fname;
        a.split("").forEach(ch => {
            if (!((ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z') || (ch == 32))) {
                console.log("correct");
                fname_inc++;
            }
        }
        )
    }
    function updateLname(e) {
        console.log(e.target.value);
        setLname(e.target.value);
    }
    function updateEmail(e) {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    function updatePass(e) {
        console.log(e.target.value);
        setPass(e.target.value);
    }
    return (

        <>
            {<form className="signup-form" action="/register" method="post">

                {/* <!-- form header --> */}
                <div className="form-header">
                    <h1>Create Account</h1>
                </div>

                {/* <!-- form body --> */}
                <div className="form-body">

                    {/* <!-- Firstname and Lastname --> */}
                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label htmlFor="firstname" className="label-title">First name *</label>
                            <input type="text" name="firstname" className="form-input" placeholder="Enter your first name" required="required" value={fname} onChange={updateFname} />
                        </div>
                        <div className="form-group right">
                            <label htmlFor="lastname" className="label-title">Last name</label>
                            <input type="text" name="lastname" className="form-input" placeholder="Enter your last name" value={lname} onChange={updateLname} />
                        </div>
                    </div>

                    {/* <!-- Email --> */}
                    <div className="form-group">
                        <label htmlFor="email" className="label-title">Email*</label>
                        <input type="email" name="email" className="form-input" placeholder="Enter your email" required="required" value={email} onChange={updateEmail} />
                    </div>

                    {/* <!-- Passwrod and confirm password --> */}
                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label htmlFor="password" className="label-title">Password *</label>
                            <input type="password" name="password" className="form-input" placeholder="Enter your password" required="required" value={pass} onChange={updatePass} />
                        </div>
                        <div className="form-group right">
                            <label htmlFor="confirm-password" className="label-title">Profile image</label>
                            <input type="password" className="form-input" id="confirm-password" placeholder="Attach your image" required="required" />
                        </div>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>}
        </>
    )
}

export default Form
