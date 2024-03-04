import React from 'react';
import GroupComponent from '../components/GroupComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginSignup.css'
import ReactPlayer from 'react-player';
import videobg from '../Assets/IndianArmy.mp4';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const LoginSignup = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <div className="logo1">
            <b className="csd-afd-online">AFD Portal</b>
          </div>
        </div>
        <div className="header-child" />
        <div className="btn">
          <div className="btn-login">
            <div className="sign-up"><Link style={{ textDecoration: 'none', color: 'inherit' }} to ="/">Home</Link></div>
          </div>
        </div>
      </div>
      <img className="desktop-1-child" alt="" src="/group-329@2x.png" />
      <GroupComponent />
      {/* Your new login form */}
      <div style={{ marginTop: "100px"}}>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
              <ReactPlayer
                url={videobg}
                style={{marginTop:120,borderRadius:"20px"}}
                width="90%"
                height="90%"
                controls={true}
                playing={true}
                loop={true}
          />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <div style={{ marginTop: 160 }} className="login-formcontainer">
                  <div className="login-form-box">
                    <h3>Login</h3>
                    <form>
                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control form-control-lg"
                          placeholder="Enter a valid email address" />
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input type="password" id="form3Example4" className="form-control form-control-lg"
                          placeholder="Enter password" />
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check mb-0">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                          </label>
                        </div>
                        <a href="#!" className="text-body">Forgot password?</a>
                      </div>

                      <div className="text-center text-lg-start mt-4 pt-2" style={{ marginTop: 160 }}>
                        <button type="button" className="btn-primary-btn-lg"
                          ><Link style={{ textDecoration: 'none', color: 'inherit' }} to ="/inventory">Login</Link></button>
                        <p style={{padding:"15px 20px"}} className="smallfw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                          className="link-danger">Register</a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginSignup;
