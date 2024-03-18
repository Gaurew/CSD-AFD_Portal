import React from "react";
import "./Desktop.css";
import logo from '../Assets/group-329@2x.png'
import Indarmy from '../Assets/image-4@2x.png'
import navy from '../Assets/navy.png'
import force from '../Assets/airforce.png'
import car from '../Assets/photo.png'
import Maj from '../Assets/Maj.png'
import cant from '../Assets/canteen.png'
import special from '../Assets/special.png'
import playbutton from '../Assets/play.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer/Footer";
import nex from '../Assets/nexon.webp'
import frox from '../Assets/fronx.webp'
function Desktop() {
  return (
    <>
      <div className="div">
        <div className="div-2">
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
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="div-11">Sign Up</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="div-12">
          <div className="div-13">
            <div className="div-14">
              <div className="column-5">
                <div className="div-15">
                  <div className="div-16">
                    CSD AFD <br />
                    PORTAL
                  </div>
                  <div className="div-17">
                    The Canteen Stores Department of Ministry of
                    Defence provides consumer goods of high quality to the
                    Indian Armed Forces at a price cheaper than the prevailing
                    market rates.
                  </div>
                  <div className="div-18">
                    <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }} ><div className="div-19">Shop Now</div></Link>
                    <div className="div-20">
                      <img
                        loading="lazy"
                        src={playbutton}
                        className="img-6"
                      />
                      <div className="div-21">Watch Video</div>
                    </div>
                    <div className="div-22">See More</div>
                  </div>
                </div>
              </div>
              <div className="column-6">
                <img
                  loading="lazy"
                  srcSet={cant}
                  className="img-7"
                />
              </div>
            </div>
          </div>
          <div className="div-23">Message from Chairman</div>
          <div className="div-24">
            <div className="div-25">
              <div className="column-7">
                <div className="div-26">
                  <img
                    loading="lazy"
                    srcSet={Maj}
                    className="img-8"
                  />
                  <div className="div-27">
                    <span className="chairman-name">
                      MAJ GEN SATINDER SINGH,SM
                    </span>
                    <br />
                    <span className="chairman-role">
                      CHAIRMAN, BOARD OF ADMINISTRATION & GENERAL
                      MANAGERCANTEEN STORES DEPARTMENT
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="column-8">
                <div className="div-28">
                  <span className="attention-text">
                    ATTENTION: Esteemed Beneficiaries & Business Partners
                  </span>
                  <br />
                  <br />
                  <br />
                  <span className="notice-text">
                    It has come to our notice that few third party firms pose themselves as agents and middlemen for facilitating various works in the department.
                  </span>
                  <span className="notice-text">
                    Few fake websites of CSD and AFD portal have been created by such unauthorised persons to misguide stakeholders of the CSD.
                  </span>
                  <span className="notice-text">
                    It is clarified that Canteen Stores Department is a Government of India organization under the Ministry of Defence.
                  </span>
                  <span className="notice-text">
                    We do not deal with the agents/middlemen and/or their representatives, in any way.
                  </span>
                  <span className="notice-text">
                    Utilizing the services of such unauthorized persons by any firm, if established, may lead to unilateral deletion of their products and possible blacklisting.
                  </span>
                  <span className="notice-text">
                    All beneficiaries are advised to exercise caution and log into the AFD portal by visiting our official website www.csdindia.gov.in.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <b className="explore-our-latest" style={{marginTop:"30px"}}>Explore Our Latest Inventory</b>
          <div className="div-29">
            
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={car} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={nex} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={frox} alt="Third slide" />
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Desktop;

