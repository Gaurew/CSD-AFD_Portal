import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Desktop.css'
import './LoginSignup.css';
import ReactPlayer from 'react-player';
import videobg from '../Assets/IndianArmy.mp4';
import { Link, useHistory } from 'react-router-dom';
import  logo from '../Assets/group-329@2x.png'
import Indarmy from '../Assets/image-4@2x.png'
import navy from '../Assets/navy.png'
import force from '../Assets/airforce.png'
import special from '../Assets/special.png'
import Footer from '../components/Footer/Footer';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      alert('Please enter a Gmail address');
      return;
    }
    history.push('/inventory');
  };

  return (
    <div>
      <div style={{marginLeft:"70px"}} className="div-2">
          <img
            loading="lazy"
            srcSet={logo}
            className="img"
          />
          <div className="div-3">
            <div className="div-4">
              <div className="column">
                <img
                  loading="lazy"
                  srcSet={Indarmy}
                  className="img-2"
                />
              </div>
              <div className="column-2">
                <img
                  loading="lazy"
                  srcSet={navy}
                  className="img-3"
                />
              </div>
              <div className="column-3">
                <img
                  loading="lazy"
                  srcSet={force}
                  className="img-4"
                />
              </div>
              <div className="column-4">
                <img
                  loading="lazy"
                  srcSet={special}
                  className="img-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="div-5">
          <div className="div-6">
            <div className="div-7">CSD AFD Portal</div>
            <div className="div-8">
              <div className="div-10">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="div-11">Home</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      <div style={{ marginTop: "-100px"}}>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <ReactPlayer
                  url={videobg}
                  style={{ marginTop: 120, borderRadius: "20px" }}
                  width="90%"
                  height="90%"
                  controls={true}
                  playing={true}
                  loop={true}
                  muted={true}
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <div style={{ marginBottom: -210 , transform:"scale(0.95)"}} className="login-formcontainer">
                  <div className="login-form-box">
                    <h3>Login</h3>
                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control form-control-lg"
                          placeholder="Enter a valid email address"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control form-control-lg"
                          placeholder="Enter password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
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
                        <button type="button" className="btn-primary-btn-lg" onClick={handleLogin}>Login</button>
                        <p style={{ padding: "15px 20px" }} className="smallfw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
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
      <Footer/>
    </div>
  );
}

export default LoginSignup;
